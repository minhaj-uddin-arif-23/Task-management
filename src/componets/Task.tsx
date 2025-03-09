import TaskCard from "@/Pages/TaskCard"
import { selectFilter, selectTask } from "@/redux/feature/task/TaskSlice"
import { useSelector } from "react-redux"


export default function Task() {
  const tasks = useSelector(selectTask)
  const filter = useSelector(selectFilter)
  console.log({tasks})
  console.log(filter)
  return (
    <div className="space-y-3">
     {
      tasks?.map((task) =>  <TaskCard key={task.id} taske={task}/>)
     }
    </div>
  )
}
