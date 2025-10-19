import { NavLink } from "react-router-dom";
import PropContext from "../Hooks/PropContext";
import {useContext } from 'react';

function NavBar() {
    const {theme } = useContext(PropContext);

    const navLinks = ({ isActive }) => ({
color:isActive?'#FF6600' : theme.color,
    fontWeight:isActive?'bold' : 'normal',
        padding:'20px',
        textDecoration:'none',
    });

    return (
        <div className="navbar">
            <NavLink to="/" style={navLinks}>Home</NavLink>
            <NavLink to="/about" style={navLinks}>About</NavLink>
            <NavLink to="/contact" style={navLinks}>Contact</NavLink>
            <NavLink to="/projects" style={navLinks}>Projects</NavLink>
        </div>
    )
}

export default NavBar;