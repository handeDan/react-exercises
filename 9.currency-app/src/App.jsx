import { useState } from "react";
import "./App.css";
import Currency from "./components/currency";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          dispaly: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Currency />
      </div>
    </>
  );
}

export default App;
