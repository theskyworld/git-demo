import { useState } from "react";

function App() {
  const [count] = useState(-1);

  return (
    <div className="App">
      <p>{count}</p>
      <p className="main-text">来自文字的theskyworld</p>
    </div>
  );
}

export default App;
