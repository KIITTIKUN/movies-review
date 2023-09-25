import './index.scss'
import { NavLink } from 'react-router-dom';

const Headbar = () => {
    return (
        <div className="Headbar">
            <header>Movie Review</header>
            <div className="routes-link">
                <NavLink activeClassName="active" to="/">Home</NavLink>
                <NavLink activeClassName="active" to="/movie">Movie</NavLink>
                <NavLink activeClassName="active" to="/">Profile</NavLink>
                <NavLink activeClassName="active" to="/">Log out</NavLink>
            </div>
        </div>
        )
}

export default Headbar;