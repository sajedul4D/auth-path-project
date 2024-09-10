
import { Outlet } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet> <br />
            <Footer></Footer>
        </div>
    );
};

export default Root;