import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
};

export const getAllUsers = createAsyncThunk("users", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState, //initialState: initialState demektir. ikisi de aynı olduğu için JS gereği vermemize gerek yok.*TRICK*
  reducers: {
    //HTTP isteği olmaz ise kullanılır!
  },
  extraReducers: (builder) => {
    //HTTP isteği varsa kullanılır!
    //getAllUsers.fulfilled: getAllUsers fonksiyonu çağrılması başarılı olursa şu fonksiyonu çalıştır.. gibi.
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
