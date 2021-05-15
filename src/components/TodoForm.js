import React,{useState} from 'react'
import {v4 as uuid} from "uuid"

function TodoForm({addTodo}) {
    const [todo,setTodo] = useState({
        id: "",
        task: "",
        completed: false
    })

    const handleTaskInputChange = e => {
        setTodo({...todo, task: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(todo.task.trim()){
            addTodo({...todo, id: uuid()})
            setTodo({...todo,task:""})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='task' type='text' value={todo.task} onChange={handleTaskInputChange}/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default TodoForm
