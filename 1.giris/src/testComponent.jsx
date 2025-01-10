//COMPONENTİN EN BASIC YAPISI :
// //rfce yazıp entera basınca ilk çıkanı seçelim.indirdiğimiz snippet ile otomatik hazır component oluşturulur.mükemmel.
import React from "react";

function testComponent() {
  ////js kodları..
  let a = 15;
  return (
    ////js+html kodları..yani jsx: {}
    <div>
      <p>a sayısı : {a}</p>
    </div>
  );
}

export default testComponent; //dışarıya export ettik, başka yerlerden import edip kullanmamız için gerekli.
