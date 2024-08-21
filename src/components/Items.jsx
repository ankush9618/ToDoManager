import React, { useRef, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useToDo } from '../context/useToDoContext';
import { FaSave } from "react-icons/fa";

function ToDoItem({todo}) {
    const [change,setChange] = useState(todo.todoData);
    const [isEditable,setIsEditable] = useState(false);
    const [checked,setChecked] = useState(todo.completed)
    const {updateItem,deleteItem,completedItem}=useToDo()
    const val = useRef()
    const clickHandler = ()=>{
        setChecked(!checked)
        completedItem(todo.id)
    }
    const deleteHandle = () =>{
        deleteItem(todo.id)
    }
    const editHandler = () =>{
        setIsEditable(!isEditable)
        updateItem(todo.id,{...todo,todoData:change})
    }
    return (
        <div className={`md:w-2/3 w-3/4 mx-auto ${checked?"bg-green-300":"bg-sky-100"} rounded-md border border-sky-600 my-2`}>
            <div className='flex justify-between p-1'>
                <div className='flex justify-start gap-4 pl-2'>
                    <input type="checkbox"  className='bg-sky-100' defaultChecked={checked} onClick={clickHandler}/>
                    <input type="text"  onChange={(e)=>setChange(e.target.value)} readOnly={!isEditable || checked} value={change} className={`bg-sky-100 w-10/12 ${checked?"bg-green-300 line-through":"bg-sky-100"}`}/>
                </div>
                <div className='flex justify-end gap-4 pr-2'>
                    <button className='text-xl' onClick={editHandler}>{isEditable?<FaSave/>:<FaEdit />}</button>
                    <button className='text-xl text-red-500' onClick={deleteHandle}><ImCross /></button>
                </div>
            </div>
        </div>
    )
}

export default ToDoItem
