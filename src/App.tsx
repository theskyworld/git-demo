import { useState } from "react";

function App() {
  const [count] = useState(0);

  return (
    <div className="App">
      <p className="sain-text">{count}</p>
    </div>
  );
}

export default App;
