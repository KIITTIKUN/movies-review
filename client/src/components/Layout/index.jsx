import Headbar from '../Headbar';
import Footer from '../Footer';
import {Outlet} from 'react-router-dom'
import './index.scss';

const Layout = () => {
    return (
        <div className='App'>
            <Headbar />
            <div className='page'>
            <Outlet />
            </div>
            <Footer />
        </div>
        )
}

export default Layout