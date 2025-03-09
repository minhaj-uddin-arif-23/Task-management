import Navbar from '@/componets/Navbar'

import { Outlet } from 'react-router-dom'

export default function Mainlayout() {
  return (
    <div className='w-11/12 mx-auto'>
      <Navbar />
     <div className='my-10'>
     <Outlet />
     </div>
    </div>
  )
}
