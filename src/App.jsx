import React from 'react'
import { add, sub, mult, div } from './Calc'

function App() {
    return (
        <>
            <ul>
                <li>sum of two number is {add(43, 5)}</li>
                <li>sub of two number is {sub(622, 5)}</li>
                <li>div of two number is {div(141, 42)}</li>
                <li>mul of two number is {mult(4, 5)}</li>
            </ul>
        </>

    )
};


export default App;