import './index.scss'
import { useContext,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { useNavigate } from 'react-router-dom';

const Headbar = () => {
    const {user,logout} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!user.auth){
            navigate('/login')
        }
    },[])
    const handleLogout = () => {
        logout();
      };

    return (
        <div className="Headbar">
            <header>Movie Review</header>
            <div className="routes-link">
                <NavLink activeclassname="active" to="/home">Home</NavLink>
                <NavLink activeclassname="active" to="/movie">Movie</NavLink>
                <NavLink activeclassname="active" to="/">Profile</NavLink>
                <NavLink activeclassname="active" onClick={handleLogout} to="/login" >Log out</NavLink>
            </div>
        </div>
        )
}

export default Headbar;