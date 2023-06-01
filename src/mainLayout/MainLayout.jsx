import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Shared/Navabr/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const MainLayout = () => {
    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('logIn') || location.pathname.includes("signUp")
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer> }
        </div>
    );
};

export default MainLayout;