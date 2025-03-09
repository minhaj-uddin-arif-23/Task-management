import { RootState } from "@/redux/store";
import { Task_formation } from "@/TaskType/type";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  task :Task_formation[],
  filter : "All" | "High" | "Medium" | "Low",
}

const initialState : InitialState = {
  task : [
    {
           id : '12poofopdsfksdsdf',
          title : "Operating System",
          description : "Operating system is software which one is use to software and user interface",
          dueDate : "2025-9-3",
          isCompleted:false,
          priority: "High",
          benefit : "Alhamdulillah",
    },
    {
      id : '12poofopdsfksdasdf',
     title : "Microprocessor",
     description : "Operating system is software which one is use to software and user interface",
     dueDate : "2025-9-3",
     isCompleted:false,
     priority: "Medium",
     benefit : "Alhamdulillah",
},
{
  id : '12poofopdsfksfsadfd',
 title : "DLD",
 description : "Operating system is software which one is use to software and user interface",
 dueDate : "2025-9-3",
 isCompleted:false,
 priority: "Low",
 benefit : "Alhamdulillah",
}
  ],
  filter : "All"
}

 export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {}
})

export const selectTask = (state : RootState) => {
  return state.todo.task
}

export const selectFilter = (state : RootState) => {
  return state.todo.filter
}

export default taskSlice.reducer