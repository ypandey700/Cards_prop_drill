import React from 'react'
import Card from './Card'

export const Cards = ({user,removeuser}) => {
  return (
    <div className='p-2  w-full  h-min-0 h-max-120 flex  flex-wrap overflow-auto gap-5'>
       
       {user.map((obj,key)=>(
        <Card  key={key} id={key} removeuser={removeuser} obj={obj}/>
       ))}
       
        

    </div>
  )
}

