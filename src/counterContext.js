import React, { useState,createContext } from "react";
import {Counter} from './components/Counter'





const counterContext = createContext()


const CounterStateContext = (props) => {
    const [count, setcount] = useState(0);

    return (
        <div id="counter-context">
            <counterContext.Provider value={{ count, setCount }}>
                {props.children}
            </counterContext.Provider >
        </div>

    )
}

export { counterContext, CounterStateContext }

