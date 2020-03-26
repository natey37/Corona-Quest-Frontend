import React, { Component } from 'react'

export default class Timer extends Component {

    state ={
        seconds: 90
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
          const { seconds} = this.state
          if (seconds > 0) {
            this.setState(({ seconds }) => ({
              seconds: seconds - 1
            }))
          }
          if (seconds === 0) {
            clearInterval(this.myInterval)
          }
        }, 1000)
      }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
    render() {
        const { seconds } = this.state
        return (
          <div >
            <h1>Time Remaining: { seconds }</h1>
          </div>
        )
      }
}