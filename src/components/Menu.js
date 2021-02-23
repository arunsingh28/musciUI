import React from 'react'
import { Link } from 'react-router-dom'
const Menu = () => {
    return (
        <div className="mainMenu">
            <ul>
                <Link to="/"><li className="active"><i className="fas fa-home"></i>Home</li></Link>
                <Link to="/add"><li><i className="fas fa-heart"></i>Liked</li></Link>
                <Link to="/lib"><li><i className="fas fa-plus"></i>Library</li></Link>
                <Link to="/setting"><li><i className="fas fa-sliders-h"></i>Setting</li></Link>
            </ul>
        </div>
    )
}

export default Menu
