import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoutes = ({children}) => {

    const { isLoading, user } = useAuth();
    const location = useLocation ();
    // console.log(location.pathname);


    if (isLoading) {
      return <div className="text-center"><span className="loading loading-spinner text-info"></span></div>;
    }
  
    if (!isLoading && !user?.email) {
      return <Navigate to="/login" state={location.pathname} />;
    }
  
    return children;
  };
   


export default PrivateRoutes;