import { configureStore } from "@reduxjs/toolkit";
import mahasiswaReducer from "./reducers/mahasiswaReducer";

const store = configureStore({
  reducer: {
    mahasiswa: mahasiswaReducer,
  },
});

export default store;
