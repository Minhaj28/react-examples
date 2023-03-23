import React from "react";

const UserContext = React.createContext({
    id: '',
      firstName: '',
      lastName: '',
      age: 0,
      address: {
          country: '',
          city: '',
      },
      url: 'dummi',
  });

  export default UserContext;