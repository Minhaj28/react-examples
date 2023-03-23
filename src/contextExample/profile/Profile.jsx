import React from 'react';
import { PersonName } from './PersonName';



const PersonAge = ({age}) => <h2>Age: {age}</h2>

const Profile = ({user}) => {
    
    return (
        <div>
            <PersonName firstName={user.firstName} lastName={user.lastName} url={user.url}/>
            <PersonAge age={user
            .age
            }/>
        </div>
    );
};

export default Profile;