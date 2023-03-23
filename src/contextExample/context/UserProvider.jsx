import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    setTimeout(() => {
      setUser({
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

  const increaseAge = () => {
    setUser((user) => ({...user, age: user.age + 1}))
  }

  if (!user) {
    return <div>Loading.....</div>;
  }

  return <UserContext.Provider value={{...user, increaseAge}}>{children}</UserContext.Provider>;
};

export default UserProvider;
