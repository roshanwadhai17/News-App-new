import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userEmail, setuserEmail] = useState(''); 
  const setUser = (data) => {
    setuserEmail(data);
  };

  return (
    <AuthContext.Provider value={{ userEmail, setuserEmail,setUser }}> 
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
