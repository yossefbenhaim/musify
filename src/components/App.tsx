import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import {
    increment,
    decrement,
    incrementByAmount,
} from '../redux/slice/counterSlice';

import './App.css';

const App: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleIncrementByAmount = () => {
        dispatch(incrementByAmount(5));
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrementByAmount}>Increment by 5</button>
        </div>
    );
};

export default App;
