import { useEffect, useState } from "react";
import "./App.css";
//useEffect: react'ın side effect'lerini yönetmek için kullandığımız bir hooks..
//side effects:
// API çağrıları yapmak
// Event listener eklemek veya kaldırmak
// DOM manipülasyonları yapmak
// LocalStorage veya sessionStorage gibi dış kaynaklarla etkileşimde bulunmak
// Tarih ve zaman işlemleri yapmak
// SetInterval veya setTimeout gibi zamanlayıcılar kullanmak
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //önce import etmeliyiz.useEffect yazıp seçeneklerden ilkini seçersek otomatik import edilir.(CTRL+boşluk da olur.)
  //callback fonksiyonu ve başlangıç arrayi alır. ama bu array opsiyoneldir. hiç konulmazsa her zaman çalışır. boş array konulursa sayfa yüklendiğinde bu component çalıştığında sadece 1 kere çalışır.içi dolu arrayse ordaki değerin state'inin güncellenip güncellenmediğine bağlı olarak çalışır.
  //CTRL+W: sayfayı kapatır.
  //CTRL+G yapınca da üstte arama butonunda : çıkar, :'yi silelim ve aradığımız dosyayı yazarsak hızlı bir şekilde sayfalar arasında geçiş yapabiliriz.
  useEffect(() => {
    console.log("her zaman çalışır.");
  });

  useEffect(() => {
    console.log("component ilk render edildiğinde sadece 1 kez çalışır.");
    //veritabanından ürünleri getir ve listele.
  }, []);

  useEffect(() => {
    console.log(
      "component ilk render edildiğinde ve firstName beya lastName state değeri değiştiğinde çalışır."
    );
  }, [firstName, lastName]);

  useEffect(() => {
    console.log(
      "component ilk render edildiğinde ve lastName state değeri değiştiğinde çalışır."
    );
  }, [lastName]);

  return (
    <div>
      <div>
        <button onClick={() => setFirstName("hande")}>Adı değiştir.</button>
      </div>
      <div>
        <button onClick={() => setLastName("dan")}>Soyadı değiştir.</button>
      </div>
    </div>
  );
}

export default App;
