import { useState } from "react";
import "./App.css";

//useState: verileri tutmak için kullandığımız bir hooks..
//önce import etmeliyiz.useState yazıp seçeneklerden ilkini seçersek otomatik import edilir.(CTRL+boşluk da olur.)

function App() {
  const [firstName, setFirstName] = useState("hande");
  const [lastName, setLastName] = useState("dan");
  const [names, setNames] = useState(["tuba", "duygu", "büşra"]);
  const [userInfo, setUserInfo] = useState({
    username: "hacı",
    password: "2121",
    age: 56,
  });
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  //önce değişken tanımlanır(const).sonra [] içine yazılanlar firstName=değişkene erişip içindeki değeri kullanırkenki ismi, setFirstName=bu ismin değerini yeni bir değerle güncellemek için kullandığımız fonksiyon.
  //useState(""): firstName'in başlangıç değerini boş string vermiş olduk.
  //firstName'in değerini setFirstName fonksiyonuyla güncelliyoruz.

  //bir state'in değerini set methodunu kullanarak değiştirdiğimizde component yeniden render edilir.
  const handleChange = () => {
    setFirstName("hakan");
  };

  const arttir = () => {
    setCount(count + 1);
  };
  const azalt = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  console.log("component render edildi.");
  //her setCount fonksiyonu çalıştığında react App componentini baştan render edilir, o zaman da yukarıdaki consol yazısı her render'da yeniden yazılır. halbuki gerek yok, performans açısından. Bunun önüne useEffect() kullanarak geçebiliriz.

  return (
    <div>
      <div>{firstName}</div>
      <div>
        <button onClick={handleChange}>İsmi Değiştir</button>
      </div>
      <div>
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
      <div>
        {userInfo.username} {userInfo.password}
      </div>
      <div>{show ? <div>{userInfo.age}</div> : <div>age bilgisi yok</div>}</div>
      <div>{count}</div>
      <div>
        <button onClick={arttir}>Arttır</button>
      </div>
      <div>
        <button onClick={azalt}>Azalt</button>
      </div>
    </div>
  );
}

export default App;
