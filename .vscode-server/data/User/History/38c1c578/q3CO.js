import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch'; 
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>,
      <TodoSearch/>,
      <TodoList>
        {todos.map = (todos => (
          <p>hola</p> {todos.text};
        ))},
      </TodoList>,
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
 