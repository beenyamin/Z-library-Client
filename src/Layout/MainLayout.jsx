import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";

const MainLayout = () => {
    return (
        <div className="">
           <div className=' w-full max-w-[1250px] px-0 lg:px-10 mx-auto font-Poppins'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
      
          </div>

    );
};

export default MainLayout;