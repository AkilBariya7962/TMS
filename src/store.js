import { configureStore } from "@reduxjs/toolkit";
import formReducer from './redux/BookSlice'
import TourSlice from './redux/ShortlyData'

export const store = configureStore({
  reducer: {
    form: formReducer,
    tour: TourSlice,
  },
})