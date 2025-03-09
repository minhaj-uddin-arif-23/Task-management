import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./feature/counter/counterSlice"
// import logger from "./middlewares/logger";
import  taskSlice  from '@/redux/feature/task/TaskSlice'
export const store = configureStore({
  reducer : {
    counter : counterSlice,
    todo:taskSlice
  },
  // middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



// ?  ui --> Dispatch --> Action --> store(reducer: logical part) --> state change