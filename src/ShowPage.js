import React from 'react'
import SimpleTable2 from './SimpleTable2';

class ShowPage extends React.Component {

    state = {
        characters: []
    }


    componentDidMount(){
        fetch(`http://localhost:3000/users/${this.props.currentUser.id}`)
        .then(resp => resp.json())
        .then(characters => {
            console.log(characters)
            this.setState({
                characters: characters.sort((a,b) => a.score > b.score ? 1 : -1).reverse()
            })
        })
    }

    render(){
        return (
            <div>
               
                <SimpleTable2 characters={this.state.characters}/>
            </div>
        )
    }

    
}

export default ShowPage