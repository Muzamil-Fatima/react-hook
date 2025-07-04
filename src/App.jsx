// import Hook from "./Hook.jsx";
import Counter from "./Counter.jsx";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  return (
    <div>
      <h1 className="bg-amber-300 m-2.5">React Hook</h1>
      {/* <Hook /> */}
      <h1>Handle Props Side Effect with useEffect in Component</h1>
      <Counter count={count} data={data} />
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
    </div>
  );
}

export default App;
