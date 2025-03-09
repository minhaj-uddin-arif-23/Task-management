import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./feature/counter/counterSlice"
import logger from "./middlewares/logger";

export const store = configureStore({
  reducer : {
    counter : counterSlice
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



// ?  ui --> Dispatch --> Action --> store(reducer: logical part) --> state change