// import the hook => usernameUseState
import React, {useState} from "react";

const App = () => {
    const [username, setUsername] = useState("");

    // function that makes handle state change
    const handleButtonClick = event => {
        setUsername(event.target.value);
    }

    return (
        <>
            <h1>Famous Taglines</h1>

            <h3>Welcome, {username}!</h3>

            <input value={username} onChange={event => setUsername(event.target.value)} />
            <button value={username} onChange={handleButtonClick} onClick={handleButtonClick}>Click Me, Click Me</button>
        </>
    )
    };

export default App;