import { configureStore } from "@reduxjs/toolkit";
//counterSlice slice'sını store'a bağlayabilmek için store.jsx'de import ettik -counterReducer adını verdik-:
import counterReducer from "./counterSlice";
//bu import alanında birden fazla slice'ı tutmamız mümkün.
//mesela:
//productSlice (ürünler için)
//applicationSlice(tüm uygulamadan erişilecek bir slice için)
//..gibi.
//bu şekilde slice'lara böleriz..

export const store = configureStore({
  reducer: {
    counter: counterReducer, //store'un içine bu key-value ile slice'ımızı bağlamış oluyoruz.
    //burada yukardan import edilen birçok slice olabilir.
    //mesela:
    //product : produtSlice,
    //application : applicationSlice,
    //..gibi.
  },
});
//App.jsx'e geçiyoruz..
