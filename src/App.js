import React, { useEffect, useState } from "react";
import "./App.css";
import { Input } from "./component/input";
import { Login } from "./component/login";
import { Video } from "./component/videoPlayer";
import UserContext from "./contextExample/context/UserContext";

import { Profile } from "./contextExample/profile";

const Url = ({ href }) => <a href={href}>{href}</a>;

function App() {
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
  return (
    <div className="App">
      {/* <Input/> */}
      {/* <Video/> */}
      {/* <Login/> */}
      <UserContext.Provider value={user}>
        <Profile />
        <UserContext.Consumer>
          {({ url }) => <Url href={url} />}
        </UserContext.Consumer>
      </UserContext.Provider>
    </div>
  );
}

export default App;
