import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import UserContext from '../context/UserContext';
import { PersonName } from './PersonName';



const PersonAge = () => {
    const {age, increaseAge} = useContext(UserContext)
    return <div>
        <h2>Age: {age}</h2>
        <button onClick={increaseAge}>+</button>
    </div>
}

const Profile = () => {
    const {isAuthorized,setIsAuthorized} = useContext(AuthContext)
    return (isAuthorized ?
        <div>
            <PersonName/>
            <PersonAge/>
            <button onClick={() => setIsAuthorized(false)}>Logout</button>
        </div> :
        <button onClick={() => setIsAuthorized(true)}>Login</button>
    );
};

export default Profile;