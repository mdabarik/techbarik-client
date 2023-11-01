import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
            <h2>Footer</h2>
        </div>
    );
};

export default MainLayout;