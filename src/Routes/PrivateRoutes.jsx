import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoutes = ({children}) => {

    const { isLoading, user } = useAuth();

    if (isLoading) {
      return <div className="progress w-full"></div>;
    }
  
    if (!isLoading && !user?.email) {
      return <Navigate to="/login" />;
    }
  
    return children;
  };
   


export default PrivateRoutes;