import React from "react";

function Products({ productName, productPrice }) {
  //const { productName, productPrice } = props;
  return (
    <div>
      <div>ÜRÜN BİLGİLERİ</div>
      <hr />
      <div>
        <div>ismi : {productName}</div>
        <div>Fiyat : {productPrice}</div>
      </div>
    </div>
  );
}

export default Products;
