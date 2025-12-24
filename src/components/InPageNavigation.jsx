import React, { useState } from 'react'

export default function InPageNavigation({teams,children}) {
    const[index,setIndex]=useState(0)

  return (
    <div className='sm:w-1/2 w-4/5 h-20 '>
        {
            teams.map((data,i)=>(
                <button className={'w-1/2 h-10 scroll-auto text-2xl border-2 pb-4 border-black my-2 '+(index==i?"p-0  border-b-4 bg-black text-white":"text-gray-500/50")}
                onClick={()=>setIndex(i)}>{data}</button>
            ))
        }
        {children[index]}
    </div>
    
  )
}
