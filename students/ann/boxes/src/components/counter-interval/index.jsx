import './style.css'
import React, { useState, useEffect } from 'react';

function CounterInterval({ intervalRunning }) {
    let [counterArr, updateArr] = useState([]);
    let [counter, updateCounter] = useState(0)

    useEffect(() => {
        let interval
        function startInterval() {
            interval = setInterval(() => {
                counter++
                updateCounter(counter)
                counterArr.push(` ${counter} ,`)
                updateArr(counterArr)
            }, 1000);
            return () => clearInterval(interval)
        }

        function stopInterval() {
            clearInterval(interval)
            updateArr([])
            updateCounter(0)
        }
        if (intervalRunning) {
            startInterval()
        } else {
            stopInterval()
        }

    }, [intervalRunning])

    return <p>{counterArr}</p>
}

export default CounterInterval;