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
  const [user, setUser] = useState("");

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

  // JWT AUTHENTICATION - to get the currently loggedIn user data.


    const userAuthentication = async () =>{
      try{
        const response = await fetch("http://localhost:5000/api/auth/user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if(response.ok){
          const data = await response.json();
          console.log('user data', data.userData);
          
          setUser(data.userData);
        }
      }catch{
        console.error("error fetching data")
      }
    }

  useEffect(() =>{
    userAuthentication();
  }, [])



  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
