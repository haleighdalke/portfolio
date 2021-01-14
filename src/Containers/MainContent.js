import React from 'react'
import "../Stylesheets/MainContent.css"

import Landing from '../Components/Landing'

export default class MainContent extends React.Component {

    state = {

    }

    componentDidMount(){

    }


    render(){
        return (
            <div className="main-content">
                <Landing />
            </div>
        )
    }
        
}