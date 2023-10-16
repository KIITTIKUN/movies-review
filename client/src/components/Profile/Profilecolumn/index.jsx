import {useContext} from 'react';

import { AuthContext } from '../../../auth/authContext'
import unknow from '../../../assets/Unknown_person.jpg'
import './index.scss'
const ProfileColumn = () =>{
    const { user } = useContext(AuthContext);

    const handleClicked = () => {
        return 
    }
    return (
        <div className='profile-column-container'>
            <div className='img-profile-container'>
                <img className="img" src={unknow}/>
            </div>
                <h2 className='text-info welcome-text'>
                    Welcome
                </h2>
                <p className='text-info username-profile'>
                    Username: {user.username}
                </p>
                <button className='button-edit-profile' onClick={handleClicked}>Edit Profile</button>
        </div>
    )
}

export default ProfileColumn