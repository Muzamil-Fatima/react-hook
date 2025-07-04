import { useEffect, useState } from "react";
import Count from "./Count.jsx";
function Hook() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    callOnce();
  }, []);

  //   function counterFunction() {
  //   console.log("Counter function called", count);
  // }

  useEffect(() => {
    console.log("Counter function called", count);
  }, [count]);

  function callOnce() {
    console.log("callOnce function called");
  }

  return (
    <div>
      <h1>useEffect Hook</h1>
      <button
        className="border-2 border-black p-1 bg-blue-300 m-1.5"
        onClick={() => setCount(count + 1)}
      >
        Counter {count}
      </button>
      <button
        className="border-2 border-black p-1 bg-blue-300 m-1.5"
        onClick={() => setData(data + 1)}
      >
        Data {data}
      </button>
      <Count />
    </div>
  );
}
export default Hook;

// see the side effect and how to handel with the help of useEffect
