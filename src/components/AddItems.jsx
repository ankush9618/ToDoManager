import React, { useRef } from 'react'
import { useToDo } from '../components/useToDoContext'

function AddItems() {
  const {addItem}=useToDo()
  const data = useRef("")
  const submitHandler = (e)=>{
    e.preventDefault();
    addItem(data.current.value)
  }
  return (
    <>
     <div className='md:w-2/3 w-3/4  mx-auto my-10 rounded-md'>
      <form action="" className='flex justify-center p-1' onSubmit={submitHandler}>
        <input ref={data} type="text" placeholder='Enter Your Tasks Here..' className='pl-2 md:w-10/12 w-8/12 p-1 rounded-l-md border border-sky-700'/>
        <button className='bg-sky-700 text-white font-semibold p-1 md:w-2/12 w-4/12 rounded-r-md'>Add Items</button>
      </form>
     </div>
    </>
  )
}

export default AddItems
