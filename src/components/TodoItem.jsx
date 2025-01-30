import React from 'react';

function TodoItem({ todo, index, toggleTodo, removeTodo }) {
  return (
    <li className={`flex justify-between items-center p-2 ${todo.completed ? 'line-through' : ''}`}>
      <span onClick={() => toggleTodo(index)}>{todo.text}</span>
      <button onClick={() => removeTodo(index)} className="text-red-500">Delete</button>
    </li>
  );
}

export default TodoItem;
