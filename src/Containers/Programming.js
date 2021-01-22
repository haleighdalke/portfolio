import React from 'react'
import "../Stylesheets/Programming.css"

// import Landing from '../Components/Landing'

export default class Programming extends React.Component {

    state = {

    }

    componentDidMount(){

    }


    render(){
        return (
            <div className="programming" >
                <div className="floating-container">
                    <h1>Programming</h1>
                    <div className="programming-content" >
                        <div className="projects">
                            <h3>Projects</h3>
                            <div>
                                <div className="project-item" style={{position: "relative", paddingBottom: "62.5%", height: 0}}><iframe src="https://www.loom.com/embed/06358caaba9d42de9c0a483ea3539c3c" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}></iframe></div>                        
                                <div className="project-item" style={{position: "relative", paddingBottom: "62.5%", height: 0}}><iframe src="https://www.loom.com/embed/546149c1144a4385875548b5f058329e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}></iframe></div>                        
                                <div className="project-item" style={{position: "relative", paddingBottom: "62.5%", height: 0}}><iframe src="https://www.loom.com/embed/699e085b38a140a7abb2c072df41bf2d" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}></iframe></div>                        
                            </div>
                        </div>
                        <div className="blogs">
                            <h3>Blogs</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
        
}