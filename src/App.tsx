import { useState } from "react";

function App() {
  const [count] = useState(-1);

  return (
    <div className="App">
      <p>{count}</p>
      <p className="main-text">来自文字theskyworld</p>
      <p>修复了bug</p>
      <p>实现了banner功能</p>
      <p>实现banner功能中...</p>
    </div>
  );
}

export default App;
