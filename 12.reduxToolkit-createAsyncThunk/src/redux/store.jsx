import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "../redux/userSlice"; //store'a userReducer'ı bağlamak için import ettik

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer, //store'a userReducer'ı bağladık.-1
  },
});
