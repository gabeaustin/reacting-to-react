import React from "react";

const Greeter = ({phrase, name}) => {
    return (
        <div>
            <h1>Hi, {name}! {phrase}</h1>
        </div>
    )
};

export default Greeter;