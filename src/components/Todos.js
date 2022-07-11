import React, { useEffect, useState } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import Todo from './Todo';

function Todos() {

  const [ todo, setTodo ] = useState([]);

  const saveLocal = (data) => {
    localStorage.setItem('reactTodo', JSON.stringify(data));
  };

  const retrieveFromLocal = () => {
    if (localStorage.getItem('reactTodo')) {
      return JSON.parse(localStorage.getItem('reactTodo'));
    }
    return [];
  };

  useEffect(() => {
    setTodo(retrieveFromLocal());
  }, []);


  const addTodo = (event) => {
    event.preventDefault();
    const item = document.getElementById('main-entry').value;
    const error = document.getElementById('error');
    if (item.length > 2){
      const newT = [...todo, {item, check: false, id: todo.length+1}];
      setTodo(newT);
      document.getElementById('main-entry').value = '';
      error.innerHTML = '';
      saveLocal(newT);
    } else {
      error.innerHTML = 'you can`t have empty todo';
    }
  }

  const checkTodo = (event) => {
    const target = Number(event.target.id.slice(5));
    const newTodo = todo.map((singleTodo) => {
      if (singleTodo.id === target) return { ...singleTodo, check: !singleTodo.check };
      return singleTodo;
    });
    setTodo(newTodo);
    saveLocal(newTodo);
  };

  const removeTodo = (id) => {
    const newTodo = todo.filter((newT) => newT.id !== Number(id));
    setTodo(newTodo);
    saveLocal(newTodo);
  }

  const editTodo = (event) => {
    if (event.keyCode === 13){
    const target = Number(event.target.id.slice(5));
    const value = event.target.value;
    const newTodo = todo.map((singleTodo) => {
      if (singleTodo.id === target) return { ...singleTodo, item: value };
      return singleTodo;
    });
    setTodo(newTodo);
    event.target.blur();
    saveLocal(newTodo);
    }
  }

  return <div className = 'todos'>
    <p id = 'error'></p>;
    <form >;
    <input type = { 'text' } name='main-entry' className = 'all-todo main-entry' id = 'main-entry' />;
    <button onClick = { addTodo } className = 'btn' id = 'add'><IoIosAddCircle /></button>;
    </form>;
    <Todo todoz = { todo } checkTodo= { checkTodo } removeTodo = { removeTodo } editTodo = { editTodo } />;
  </div>;
}

export default Todos;
