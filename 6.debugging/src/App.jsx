import { useState } from "react";
import "./App.css";

function App() {
  const [vize1, setVize1] = useState(0);
  const [vize2, setVize2] = useState(0);

  const ortalamaBul = () => {
    debugger;
    const toplamSonuc = topla() / 2;
    yazdir(toplamSonuc);
  };

  const topla = () => {
    const toplam = vize1 + vize2;
    debugger; //hangi satırda problem olduğunu düşünüyorsak o satırın üstüne koyuyoruz, ordan debuglamaya başlıyor.
    //browser console'da source bölümüne gelelim, butona tıklayınca deebugger'ı source'da görürüz.(debug'a düştük)
    //debugger seçeneklerine basarsak ilerler, durur vs.
    //step over'a basarsak bir sonraki satıra geçer.(F10)
    //step over'la ilerledikçe kodlar arasında kurguya göre ilerler.
    //YANİ DEBUGLA ADIM ADIM HATAMIZI GÖREBİLİRİZ. ÖZELLİKLE ŞÜPHELENDİĞİMİZ YERİ TEST EDEBİLİRİZ.
    //bazı yazılımcılar console.log ile konsola yazdırarak test edip hatalarını görürler.
    //ikisi de kullanılır.
    return toplam;
  };

  const yazdir = (sonuc) => {
    debugger;
    console.log("Ortalama" + sonuc);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={vize1}
          onChange={(e) => setVize1(Number(e.target.value))}
        />
      </div>
      <div>
        <input
          type="number"
          value={vize2}
          onChange={(e) => setVize2(Number(e.target.value))}
        />
      </div>
      <div>
        <button onClick={ortalamaBul}>Ortalama bul</button>
      </div>
    </div>
  );
}

export default App;
