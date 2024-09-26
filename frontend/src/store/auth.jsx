// import React, { createContext, useContext, useState } from "react";

// export const AuthContext = createContext();


// export const AuthProvider = ({children}) => {

//     const [token, setToken] = useState(localStorage.getItem("token"));

//     const storeTokenInLS = (serverToken) => {
//         return localStorage.setItem('token', serverToken);
//     }

//     let isLoggedIn = !!token;
//     console.log(isLoggedIn);
    


//     // Logout:
//     const LogoutUser = (() =>{
//     setToken("");
//     return localStorage.removeItem('token');
//     });

//      return (<AuthContext.Provider value={{isLoggedIn, storeTokenInLS, LogoutUser}}>
//         {children}
//      </AuthContext.Provider>
//      );

// }


// export const useAuth = () =>{
//     return useContext(AuthContext)
// }


import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Store token in localStorage and update state
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem('token', serverToken);
    setToken(serverToken); // Update the state
  };

  // Determine if the user is logged in
  let isLoggedIn = !!token;

  console.log(isLoggedIn);

  // Logout user by removing token
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem('token');
  };

  // Sync token with localStorage in case it changes outside React (optional)
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken !== token) {
      setToken(storedToken);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
