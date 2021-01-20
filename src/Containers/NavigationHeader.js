import React from 'react'
import '../Stylesheets/NavigationHeader.css'
import NavigationLinks from '../Components/NavigationLinks'

export default class NavigationHeader extends React.Component {

    state = {

    }

    componentDidMount(){

    }


    render(){
        return (
            <div className="navigation-header">
                <NavigationLinks />
            </div>
        )
    }
        
}