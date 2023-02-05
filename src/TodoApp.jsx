import React, { useState } from 'react'
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis/todosApi'

export default function TodoApp() {

    // const { data:todos = [], isLoading } = useGetTodosQuery();

    const [todoId, settodoId] = useState(2);
    const { data: todo = {}, isLoading } = useGetTodoByIdQuery(todoId);

    function nextTodo() {
        settodoId(todoId + 1);
    }
    function prevTodo() {
        if (todoId > 1) {
            settodoId(todoId - 1);
        }
    }

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>

            <pre>{JSON.stringify(todo)}</pre>

            {/* <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}>
                            <strong>{todo.completed ? 'DONE' : 'PENDING'}</strong>
                            {todo.title}
                        </li>
                    ))
                }
            </ul> */}

            <button onClick={() => { prevTodo() }}>
                Prev todo
            </button>

            <button onClick={() => { nextTodo() }}>
                Next todo
            </button>
        </>
    )
}
