import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({handleUser}) => {
    const {register,reset,handleSubmit}=useForm();
  return (
    <div className=' ' >
        <form action="" className='flex gap-5' onSubmit={
            handleSubmit((data)=>{
                handleUser(data);
                
                reset();

            })
            } >
            <input type="text" {...register("name") }className='bg-amber-50 p-2 font-medium ' placeholder='Name' />
            <input type="email" {...register("email")}  className='bg-amber-50 p-2 font-medium ' placeholder='Email' />
            <input type="text" {...register("imgUrl")}  className='bg-amber-50 p-2 font-medium ' placeholder='Img-Url' />
            <input type="text" {...register("about")} className='bg-amber-50 p-2 font-medium ' placeholder='About' />
            <input type="submit" className='bg-blue-500  px-6 py-1  font-medium '  />
            
        </form>
    </div>
  )
}

export default Form