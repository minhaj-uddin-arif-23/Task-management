import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import { AddTask } from '@/Module/Task/AddTask'
import { Task_formation } from '@/TaskType/type'
import { Trash2 } from 'lucide-react'


interface AllProps {
  taske:Task_formation
}

export default function TaskCard({taske} : AllProps) {
  return (
  <>
  <div className='flex justify-between'>
    <h1>Task</h1>
     <p> <AddTask /> </p>
  </div>
  <div className='border-2 p-5  rounded-3xl gap-5'>
      <div className= ' flex justify-between '>
      <div className='flex'>
        <p className={cn("mt-2 mr-2 rounded-full bg-green-600 size-3",{
          "bg-green-600": taske.priority === 'High',
          "bg-red-600": taske.priority === 'Medium',
          "bg-yellow-600": taske.priority === 'Low',
        })}></p>
        <h1 className=''>
        {taske.title}
        </h1>
      </div>
      <div className='flex '>
      <Trash2 size={16} strokeWidth={0.75} absoluteStrokeWidth className='mt-1 mr-3 text-red-500'/>
      <Checkbox  className='mt-1'/>
      
      </div>
      
      </div>
      <div className='mt-2 ml-2'> 
        {taske.description}
      </div>
    </div>

  </>
  )
}
