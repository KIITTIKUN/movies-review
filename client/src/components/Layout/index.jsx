import Headbar from '../Headbar';
import {Outlet} from 'react-router-dom'
import './index.scss';

const Layout = () => {
    return (
        <div className='App'>
            <Headbar />
            <div className='page'>
            <Outlet />
            </div>
        </div>
        )
}

export default Layout