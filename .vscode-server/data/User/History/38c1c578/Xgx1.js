import React from 'react';
import './App.css';

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter/>,
      <TodoSearch/>,
      <Todolist>
        <TodoItem/>
      </Todolist>,
      <CreateTodoButton/>
    
  );
}

export default App;
