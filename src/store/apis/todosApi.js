import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),

    endpoints: (builder) => (
        {
            getTodos: builder.query({
                //'https://jsonplaceholder.typicode.com/'+'/todos'
                query: () => '/todos'
            }),
            getTodoById: builder.query({
                //'https://jsonplaceholder.typicode.com/'+'/todos/'+todoId
                query: (todoId) => '/todos/'+todoId
            }),
        }
    )

});

// Se exporta un custom hook que devuelve el RTK Query
// El nombre se pone solo, según el tipo de consulta y
// a partir del nombre del reducer de los endpoints
export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;