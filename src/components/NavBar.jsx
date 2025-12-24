import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function NavBar() {
  
  return (
    <div className="min-w-screen min-h-screen">
      <div className='w-screen h-24 bg-blue-500 flex justify-center items-start flex-col'>
          <h1 className='sm:pl-20 text-2xl py-5'>Indian Premier Leauge - 2024</h1>
          <div className='w-screen h-16 flex justify-center items-end gap-5'>
            <Link to={'/'} ><h1 className='active:bg-blue-400'>MATCHES</h1></Link>
            <Link to={'/news'}><h1 className=' active:bg-blue-400'>NEWS</h1></Link>
            <Link to={'/pointsTable'} ><h1 className='active:bg-blue-400'>TABLE</h1></Link>
            <Link to={'/stats'}><h1 className='active:bg-blue-400'>STATS</h1></Link>
            <Link to={'/player'}><h1 className='active:bg-blue-400'>PLAYERS</h1></Link>
        
          </div>
      </div>
      <Outlet/>
    </div>
  )
}
