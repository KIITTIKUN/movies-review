import './index.scss'
import { NavLink } from 'react-router-dom';

const Headbar = () => {
    return (
        <div className="Headbar">
            <header>Movie Review</header>
            <div className="routes-link">
                <NavLink activeclassname="active" to="/home">Home</NavLink>
                <NavLink activeclassname="active" to="/movie">Movie</NavLink>
                <NavLink activeclassname="active" to="/">Profile</NavLink>
                <NavLink activeclassname="active" to="/">Log In</NavLink>
            </div>
        </div>
        )
}

export default Headbar;