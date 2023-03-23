import React, { useEffect, useState } from "react";
import "./App.css";
import { Input } from "./component/input";
import { Login } from "./component/login";
import { Video } from "./component/videoPlayer";
import AuthProvider from "./contextExample/context/AuthProvider";
import UserContext from "./contextExample/context/UserContext";
import UserProvider from "./contextExample/context/UserProvider";

import { Profile } from "./contextExample/profile";

function App() {
  return (
    <div className="App">
      {/* <Input/> */}
      {/* <Video/> */}
      {/* <Login/> */}
      <AuthProvider>
        <UserProvider>
          <Profile />
        </UserProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
