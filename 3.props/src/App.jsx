import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Products from "./Products";
import Container from "./Container";

function App() {
  const productName = "Buzdolabı";
  const productPrice = "15000 TL";
  return (
    <>
      {/* <div>
        <Products productName="Ayakkabı" productPrice="3000 TL" />
        <hr />
        <Products productName="Pantolon" productPrice="950 TL" />
        <hr />
        <Products productName={productName} productPrice={productPrice} />
      </div> */}
      <div>
        <Container>
          <Products productName={productName} productPrice={productPrice} />
        </Container>
      </div>
    </>
  );
}

export default App;
