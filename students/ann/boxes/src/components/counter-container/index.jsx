import CounterInterval from "../counter-interval";
import React, { useState } from "react";

function CounterContainer() {

    let [isCheck, updateIsCheck] = useState(false)
    const handleCheckChange = () => {
        isCheck = !isCheck
        updateIsCheck(isCheck)
    }

    return (
        <React.Fragment>
            <label>Check the box to start the interval</label>
            <input
                id="checkbox" type="checkbox" onChange={handleCheckChange}
            ></input>
            <CounterInterval intervalRunning={isCheck}></CounterInterval>
        </React.Fragment>
    )
}

export default CounterContainer;