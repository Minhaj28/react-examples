import React, { useState } from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({children}) => {
    const [isAuthorized,setIsAuthorized] = useState(false);
    return (
        <AuthContext.Provider value={{isAuthorized,setIsAuthorized}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;