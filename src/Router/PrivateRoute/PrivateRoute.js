import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
     
    const{loading,user}=useContext(AuthContext)
    const location=useLocation()
    
    if(loading){
        return <div>
            <progress className='progress w-56'>loading.......</progress>
        </div>
    }
    if(user){
        return children
    }
    
    <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;