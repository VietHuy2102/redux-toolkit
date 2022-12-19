import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, increAmount } from "./counterSlice";

export default function Counter() {
  const [amount, setAmount] = useState(2);
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increAmount(amount))}>IncreAmount</button>
    </div>
  );
}
