import { useState } from "react";
import "./App.css";

function App() {
  ////js kodları..
  let a = 30;
  const firstName = "Hande";
  const lastName = "Dan";
  let vize1 = 60;
  let vize2 = 80;
  let names = ["Hande", "Hakan", "Nil"];

  return (
    ////js+html kodları..yani jsx: {}
    <div>
      <p>
        {firstName} {lastName} {a} yaşındadır.
      </p>
      <p>Ortalama: {(vize1 + vize2) / 2}</p>
      {(vize1 + vize2) / 2 >= 50 ? <p>Geçtiniz.</p> : <p>Kaldınız.</p>}

      {names.map((name, index) => (
        <div
          style={{
            backgroundColor: "orange",
            border: "1px solid black",
          }}
          key={index}
        >
          {name}
        </div>
      ))}
    </div>
  );
}
////style={{}}..ilk açılan {} jsx yapısı, css özellikleri de ikinci {}...
export default App;
