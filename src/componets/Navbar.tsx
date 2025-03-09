
import { Link } from 'react-router-dom'
import img from '@/assets/to-do-list.png'
export default function Navbar() {
  return (
    <div className='flex justify-between mt-3'>
      <div className='flex gap-3 '>
        <img src={img} className='w-8' alt="" />
        <Link to={'/'} className='text-2xl text-green-700 font-semibold'>Tasks<span className='text-red-600 text-2xl font-semibold'>Mange</span> </Link>
      </div>
      <div>
        <Link to={'/'} className=' ml-10 mr-3'>Task</Link>
        <Link to={'/users'}>User</Link>
      </div>
    </div>
  )
}
