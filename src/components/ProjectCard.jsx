import {useContext } from 'react';
import PropContext from '../Hooks/PropContext';

function ProjectCard(props) {
    const {theme} = useContext(PropContext);

    return (
        <div className="w-[600px] h-[700px] rounded-[20px] shadow-[0_4px_8px_rgba(0, 0, 0, 0.1)] flex flex-col justify-between p-[20px] m-[20px] transition-all duration-300 ease-in-out max-[768px]:w-[90%] max-[768px]:h-auto max-[768px]:my-[10px] max-[768px]:mx-0"
            style={{backgroundColor: `#${theme.circleBorder}`,
                color: theme.color,
                border: `5px solid #${theme.circleBorder}`}}>
            <a href={props.link} target="_blank">
                <img src={props.img} alt={props.title} className="w-full h-[350px] rounded-[10px] object-cover max-[768px]:h-[200px] hover:scale-[1.05]"/></a>
            <h3 className="text-[#ff6600] text-[50px] font-bold text-left mb-0 max-[768px]:text-[30px]">{props.title}</h3>
            <p className="text-[25px] text-left pb-[20px] max-[768px]:text-[18px] max-[768px]:pb-[15px]">{props.description}</p>
            <div className="text-[35px] text-[#ca926dff] border-t border-t-[#ccc] pt-[10px] max-[768px]:text-[20px] max-[768px]:pt-[5px]
">{props.tech}</div>
        </div>
    )
}

export default ProjectCard;