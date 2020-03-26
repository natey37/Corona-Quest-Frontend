import React from 'react'
import SimpleTable2 from './SimpleTable2';
import { Redirect } from 'react-router-dom';
import NavBar from './NavBar'


class ShowPage extends React.Component {



    componentDidMount(){
        if(this.props.userLogged){
            this.props.getMyChars()
        } 
    }


    render(){
        return (
            <div>
                <NavBar />
                {this.props.userLogged ? <SimpleTable2 characters={this.props.myChars}/> : <Redirect to='/startscreen'/>}
            </div>
        )
    }

    
}

export default ShowPage