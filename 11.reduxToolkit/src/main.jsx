import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";

//redux Toolkit: redux'taki karmaşıklığı engellemek için geliştirilmiş bir pakettir. uygulamamızda bulunan tüm state ve fonksiyonları base bir yerde tanımlayıp istenen componentlerden erişmek için tasarlanmıştır. props taşımacılığından, kod kalabalığından kurtuluruz. perfect state management:))

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

//1-Provider componenti ile App'i sarmalıyız ki bütün uygulama üzerinden store'a erişebilelim. (store'u da bağlamayı unutmayalım) - main.jsx

//2-slice oluştururuz. bunun içerisinde state ve fonksiyonları tanımlarız(istediğimiz kadar olabilir) - counterSlice.jsx

//3-//bu slice'ı store'a bağlayabilmek için de store.jsx'de import edip bağlarız. - store.jsx

//4-slice'ın içindeki state'lere erişmek için çağırmak istediğimiz component'te useSelector kullanırız. - App.jsx

//5-slice'ın içindeki fonksyionlara erişmek için çağırmak istediğimiz component'te useDispatch kullanırız. - App.jsx

//* */
//* */
//* */

//**importlara dikkat!!

//* */
//* */
//* */

//**ana redux kurgusunu yaptıktan sonra sadece slice oluşturup store'a bağlayıp ilgili componentte çağırıp kullanırız.**
