import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import { PersonName } from './PersonName';



const PersonAge = () => {
    const {age} = useContext(UserContext)
    return <div>
        <h2>Age: {age}</h2>
    </div>
}

const Profile = () => {
    
    return (
        <div>
            <PersonName/>
            <PersonAge/>
        </div>
    );
};

export default Profile;