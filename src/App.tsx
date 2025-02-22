import { useState } from "react";

function App() {
  const [count] = useState(0);

  return (
    <div className="App">
      <p>{count}</p>
      <p className="main-text">App</p>
    </div>
  );
}

export default App;
