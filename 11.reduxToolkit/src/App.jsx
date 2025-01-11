import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";

function App() {
  //SLICE'IN İÇİNDEKİ STATE DEĞERİNE ERİŞEBİLMEK İÇİN: useSelector hook'unu kullanarak store'dan ilgili slice'ı çekiyoruz (store'un içindeki counter slice'ı):
  const { value } = useSelector((store) => store.counter);
  console.log(value);

  //SLICE'IN İÇİNDEKİ FONKSİYONLARA ERİŞEBİLMEK İÇİN: useDispatch hook'unu kullanarak dispatch ile ilgili fonksiyonu git getir deriz.:
  const dispatch = useDispatch(); //dispatch = "git ve getir"

  return (
    <>
      <div>{value}</div>
      <div>
        {/* dispatch ile ilgili fonksiyonları gidip getirtiyoruz: */}
        <button onClick={() => dispatch(increment())}>Arttır</button>
        <button onClick={() => dispatch(decrement())}>Azalt</button>
      </div>
    </>
  );
}

export default App;
