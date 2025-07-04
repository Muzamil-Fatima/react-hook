function Count({ counter, data }) {
  const getCounter = () => {
    console.log("Counter function called");
  };

  getCounter();
  return (
    <div>
      <h1>Counter Component</h1>
      <h1>{counter}</h1>
      <h1>{data}</h1>
    </div>
  );
}

export default Count;
