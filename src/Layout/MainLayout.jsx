import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Components/MainContent/Footer";

const MainLayout = () => {
    return (
        <div className="">
           <div className=' w-full max-w-[1250px] px-0 lg:px-6 mx-auto font-Poppins'>
            <Navbar></Navbar>
            <Outlet></Outlet>

            </div>
            <div className="w-full max-w-[1250px] px-0 lg:px-6 mx-auto">

            <Footer></Footer>
            </div>
            
      
          </div>

    );
};

export default MainLayout;