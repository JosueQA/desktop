import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch'; 
import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
]

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter/>,
      <TodoSearch/>,
      <TodoList>
        {todos.map = (todos => (
          <TodoItem text={todos.text}/>
        ))},
      </TodoList>,
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
 