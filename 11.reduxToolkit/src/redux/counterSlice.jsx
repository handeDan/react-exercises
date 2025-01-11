import { createSlice } from "@reduxjs/toolkit"; //slice oluşturmak için gerekli redux import'u.
//bu slice'ta state ve dışarda kullanmak istediğimiz fonksiyonları yazdık.

//bunları component'te de tanımlayabilirdik ama redux toolkit'le ana merkezde tanımlayıp her yerden erişilebilir hale getirdik.
//istediğimiz component'te çağırıp kullanabiliriz.
//props taşımaya gerek kalmadı:)

const initialState = {
  //state'ler burada tanımlanır.
  value: 0,
  //daha çok state yazabiliriz. mesela:
  //isAuthenticate :  false; (kullanıcı sisteme başarılı bir şekilde login oldu mu?)
  //personelList : [],
  //..gibi.
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // ortak fonksiyonları reducers altında tanımlarız.
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions; //yukarıdaki fonksiyonlara dışarıdan erişebilmek için burada veriyoruz.(dışarıya açıyoruz.)

export default counterSlice.reducer;

//bu slice'ı store'a bağlayabilmek için de store.jsx'de import ettik.
