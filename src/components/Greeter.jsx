import React from "react";

const Greeter = ({phrase, name}) => {
    return (
        <>
            <Greeter name = "Don Lemon" phrase = "This is CNN." />
            <Greeter name = "T.D. Jakes" phrase = "Get Ready, Get Ready, Get Ready!!" />
            <Greeter name = "Oprah" phrase = "You get a car, You get a car!" />
    
            <p><h3>Hi, {this.props.name}!</h3></p>

            <h1>Hi, {name}! {phrase}</h1>
        </>
    );
};

export default Greeter;
