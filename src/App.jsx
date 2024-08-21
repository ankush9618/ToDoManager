import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import Header from './components/Header'
import { ToDoProvider } from './components/useToDoContext'
import ToDoItem from './components/ToDoItem'

function App() {
  const [todoItems,setTodoItems] = useState([])
  const addItem = (data)=>{
    setTodoItems((prev)=>[{id:Date.now(),todoData:data,completed:false},...prev])
    console.log(todoItems)
  }
  const deleteItem = (id)=>{
    setTodoItems((prev)=>prev.filter((todo)=>todo.id!==id))
  }
  const updateItem = (id,todo) =>{
    setTodoItems((prev)=>prev.map((ele)=>ele.id===id?todo:ele));

  }
  const completedItem = (id) =>{
    setTodoItems((prev)=>prev.map((todo)=>todo.id===id?{...todo,completed:!todo.completed}:todo))
  }

  useEffect(()=>{
    const todoItem = JSON.parse(localStorage.getItem("todos"));
    if(todoItem && todoItem.length>0){
      setTodoItems(todoItem)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todoItems));
  },[todoItems])


  return (
    <ToDoProvider value={{todoItems,addItem,deleteItem,updateItem,completedItem}}>
    <Header/>
    <Input/>
    {
      todoItems.map((todo)=><ToDoItem key={todo.id} todo={todo}/>)
    }
    </ToDoProvider>
  )
}

export default App
