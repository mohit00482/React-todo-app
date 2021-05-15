import "./App.css";
import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = 'react-todo-list-todos'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storageTodos){
      setTodos(storageTodos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  },[todos])

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const toggleComplete = id => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    )
  }

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id!==id))
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>React todo-list</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
      </div>
    </div>
  );
}

export default App;
