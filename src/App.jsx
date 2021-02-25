// import React from "react";
// import Greeter from "./components/Greeter"

import React, { useState, useEffect } from 'react';
import Greeter from './components/Greeter';

const App = props => {
    return (
        <>
            <h1>My first React application!</h1>

            <Greeter name = "Don Lemon" phrase = "This is CNN." />
            <Greeter name = "T.D. Jakes" phrase = "Get Ready, Get Ready, Get Ready!!" />
            <Greeter name = "Oprah" phrase = "You get a car, You get a car!" />
        </>
    )
};

export default App;