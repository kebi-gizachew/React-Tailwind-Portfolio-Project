import {useContext } from 'react';
import PropContext from '../Hooks/PropContext';

function ProjectCard(props) {
    const {theme} = useContext(PropContext);

    return (
        <div className="project-card"
            style={{backgroundColor: `#${theme.circleBorder}`,
                color: theme.color,
                border: `5px solid #${theme.circleBorder}`}}>
            <a href={props.link} target="_blank">
                <img src={props.img} alt={props.title} className="project-card-img"/></a>
            <h3 className="project-card-title">{props.title}</h3>
            <p className="project-card-description">{props.description}</p>
            <div className="project-card-tech">{props.tech}</div>
        </div>
    )
}

export default ProjectCard;