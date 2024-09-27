"use client"

import { useState } from "react";


export default function SimpleCounter(){

    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount(count + 1);
        // count = count + 1; // don't do this, it will break the live updates
    }

    // setCount(3); it will create an infinite loop, Re-renders the page every time it comes to this step 
    // setters trigger a re-render of the page, so we cannot invoke a setter in the code cell.
    return(
        <div>
            <h2>Simple Counter</h2>
            <p>Count: {count} </p>
            {/* <button onClick={ setCount(count + 1 )}>Increment!</button> same re-rendering error */} 
            <button onClick={ incrementCounter}>Increment!</button>
        </div>
    );
}