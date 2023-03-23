import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setuser] = useState();

  useEffect(() => {
    setTimeout(() => {
      setuser({
        id: "1234",
        firstName: "Minhaj",
        lastName: "Uddin",
        age: 24,
        address: {
          country: "Bangladesh",
          city: "Jashore",
        },
        url: "https://github.com/Minhaj28",
      });
    }, 2000);
  }, []);

  if (!user) {
    return <div>Loading.....</div>;
  }

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
