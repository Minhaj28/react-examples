import './App.css';
import { Input } from './component/input';
import { Login } from './component/login';
import { Video } from './component/videoPlayer';
import { Profile } from './contextExample/profile';




function App() {
  const user = {
    id: '1234',
    firstName: 'Minhaj',
    lastName: 'Uddin',
    age: 24,
    address: {
        country: 'Bangladesh',
        city: 'Jashore',
    },
    url: 'https://github.com/Minhaj28',
}
  return (
    <div className="App">
      {/* <Input/> */}
      {/* <Video/> */}
      {/* <Login/> */}
      <Profile user={user}/>
    </div>
  );
}

export default App;
