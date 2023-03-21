import React, { useRef, useState } from 'react';

const Input = () => {
    const [name,setName] = useState('');
    const inputRef = useRef(null);

    const handleNameUpdate = () => {
        setName(inputRef.current.value);
        console.log(inputRef.current.value);
    }
    return (
        <div>
            <h1>Input Component</h1>
            <input ref={inputRef} type="text" />
            <button onClick={handleNameUpdate}>Submit</button>

            <div>
                <p>My Name is {name}</p>
            </div>
        </div>
    );
};

export default Input;