import Counter from "./Counter.jsx";
import { useState } from "react";
function User() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const [display, setDisplay] = useState(true);
  return (
    <div>
      {display ? <Counter count={count} data={data}></Counter> : null}
      {/* <h1>Handle Props Side Effect with useEffect in Component</h1> */}
      <button
        className="border-2 border-black p-1 bg-blue-300 m-1.5"
        onClick={() => setCount(count + 1)}
      >
        Counter
      </button>

      <button
        className="border-2 border-black p-1 bg-blue-300 m-1.5"
        onClick={() => setData(data + 1)}
      >
        Data
      </button>
      <button
        className="border-2 border-black p-1 bg-blue-300 m-1.5"
        onClick={() => setDisplay(!display)}
      >
        Toggle
      </button>
    </div>
  );
}

export default User;
