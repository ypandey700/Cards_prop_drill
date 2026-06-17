import {  useState } from 'react'
import Card from './Compoenent/Card'
import { Cards } from './Compoenent/Cards'
import Form from './Compoenent/Form'
function App() {
  const [user, setuser] = useState([]);
  const handleUser=(e)=>{
    setuser([...user,e]);
  }
  const removeuser=(idx)=>{
    setuser(user.filter((item,i)=>{
      return idx!=i;
    }))

  }
  return (
    <div className='w-full h-screen p-10 bg-zinc-400'>
     <Cards user={user} removeuser={removeuser} ></Cards>
     <Form handleUser={handleUser}/>


    </div>
  )
}

export default App
