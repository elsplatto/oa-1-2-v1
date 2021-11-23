import React, { useState, createContext } from 'react';

export const LoggedInStatusContext = createContext(null);

const Store = ({children}) => {
	const [loginStatus, setLoginStatus] = useState(null);
	return (  
				    
    <LoggedInStatusContext.Provider value={[loginStatus, setLoginStatus]}>
        {children}
    </LoggedInStatusContext.Provider>
          				
	)	
}

export default Store;