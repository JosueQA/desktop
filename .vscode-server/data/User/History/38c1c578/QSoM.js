import React from 'react';
import { TodoCounter } from './TodoCounter';
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
      <Todolist>
        {todos.map = (todos => (
          <TodoItem/>
        ))},
      </Todolist>,
      <CreateTodoButton/>
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
 