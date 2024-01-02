import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
    const [todos, setTodos] = useState(
        initialTodos
    );

    function handleAddTodo(title) {
        setTodos(
            [{id: nextId+1, title: title, done: false},
                ...todos]
        );
        // todos.push({
        //     id: nextId++,
        //     title: title,
        //     done: false
        // });
    }

    function handleChangeTodo(nextTodo) {
        setTodos(todos.map(t => {
            if (t.id === nextTodo.id) {
                return nextTodo;
            } else {
                return t;
            }
        }));
    }

    function handleDeleteTodo(todoId) {
        // const index = todos.findIndex(t =>
        //     t.id === todoId
        // );
        // todos.splice(index, 1);
        setTodos(todos.filter((todo)=> todo.id !== todoId))
    }

    return (
        <>
            <AddTodo
                onAddTodo={handleAddTodo}
            />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}
