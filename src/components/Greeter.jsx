
import React, {useState, useEffect} from "react";
import Greeter from "./Greeter";

const App = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (loaded === false) {
      setTimeout(() => setLoaded(!loaded), 3000);
    }
  }, [loaded]);

  let handleClick = () => setLoaded(!loaded);

  if (loaded) {
    return (
      <div>
        <>
            <Greeter name = "Don Lemon" phrase = "This is CNN." />
            <Greeter name = "T.D. Jakes" phrase = "Get Ready, Get Ready, Get Ready!!" />
            <Greeter name = "Oprah" phrase = "You get a car, You get a car!" />
        </>

        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <p>You are logging in as: {username}</p>
        <p>{props.text}</p>
      </div>
    );
  } else {
    return (
      <>
        <h1>Website Loading...</h1>
        <button onClick={() => handleClick()}>Click here</button>
      </>
    );
  }
};

export default App;