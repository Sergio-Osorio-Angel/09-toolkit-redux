import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './apis/todosApi'
import { counterSlice } from './slices/counter/counterSlice'
import { pokemonSlice } from './slices/pokemon/pokemonSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,
    
    // Se debe de agregar todos los custom hooks que devuelve
    // el RTK Query creado
    [todosApi.reducerPath]: todosApi.reducer,
  },
  // Se debe de configurar el middleware del RTK Query creado
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})