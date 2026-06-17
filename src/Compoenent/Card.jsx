import React from 'react'

const Card = ({obj,removeuser,id}) => {
  

 
  return (
    
    <div className='w-40 h-65 overflow-hidden bg-amber-100 flex  items-center flex-col'>
        <div className='w-20 h-20 mt-6 rounded-full overflow-hidden'>
          <img src={obj.imgUrl} alt="" className='w-full h-full  ' />

        </div>
        <h1 className='mt-1  font-bold'>{obj.name}</h1>
        <h2 className='text-xs mt-2  break-all opacity-70'>{obj.email}</h2>
        <p className='text-sm  text-center   break-all line-clamp-3 mt-5'>{obj.about}</p>
        <div onClick={(e)=>{
          
          removeuser(id);
          

        }} className='  mt-3 text-sm  py-1 px-4 rounded-md bg-red-500'>Remove</div>
   
    </div>
  )
}

export default Card