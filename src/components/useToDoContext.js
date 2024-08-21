import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todoItem:[
        {
            id:1,
            todoData:"Learn React",
            completed:false
        },
    ],
    addItem:(todoData)=>{},
    deleteItem:(id)=>{},
    updateItem:(id,todoData)=>{},
    completedItem:(id)=>{}
});

export const ToDoProvider = ToDoContext.Provider;

export const useToDo = ()=>{
    return useContext(ToDoContext);
}


