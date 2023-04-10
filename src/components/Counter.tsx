import React, {useState} from 'react';
import cl from  './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0)

    function increaseCounter() {
        setCount(prev => prev + 1);
    }

    return (
        <div className={cl.counterWrapper}>
            <span className="counter-text">{count}</span>
            <button onClick={increaseCounter}>increment</button>
        </div>
    );
};

export default Counter;
