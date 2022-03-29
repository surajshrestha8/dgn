import {Navigate, useLocation} from 'react-router-dom';
import { useAuthStore } from '../store/app.store';
const ProtectedRoutes = ({children}:any) => {
   const { isLoggedIn } = useAuthStore();
   let location = useLocation(); 
   if(!isLoggedIn) {
       return <Navigate to='/login' state={{from:location}} replace />
   } 
   return children;
};

export default ProtectedRoutes;
