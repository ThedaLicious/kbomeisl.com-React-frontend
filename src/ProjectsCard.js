import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import './Carousel.css'

const ProjectCard = (props) => {


    return (
        <div className="green card">    
            <div className="content">
                <h2 id="proj-name">
                    {props.name}
                </h2>
                <div className="description">
                    <p id="proj-des">{props.description}</p>
                </div>
                
               
                
            </div>
            <div className="extra content">
                <button className="ui button">
                    <p id="proj-des">{props.github}</p>
                </button>
            
            </div>
        </div>
    )
    
}

export default ProjectCard;
