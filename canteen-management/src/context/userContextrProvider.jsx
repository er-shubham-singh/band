import React, { useState, useEffect } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, booking, setBooking }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;