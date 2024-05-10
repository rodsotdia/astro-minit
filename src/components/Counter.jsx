import { useState } from "react";

export default function Counter({ number }) {
  const [counter, setCounter] = useState(number);

  return (
    <div className="mt-16">
      <h3>This is a counter: {counter}</h3>
      <button className="border px-4 py-2" onClick={() => setCounter(counter + 1)}>
        Increment count
      </button>
    </div>
  );
}
