import './App.css'

// Hooks Redux
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter/counterSlice';

function App() {

  // useSelector
  const { counter } = useSelector((state) => state.counter);

  // useDispatch
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>count is {counter}</h1>
      <div className="card">
        {/* Invocar funciones desde el dispatch */}
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>

        {/* Así sería si solo se quiere mandar un número */}
        {/* <button onClick={() => dispatch(incrementByAmount(20))}>+2</button> */}

        {/* Así sería si se quiere mandar un objeto al reducer */}
        <button onClick={() => dispatch(incrementByAmount({value: 20, otro: 'otroArgumento'}))}>+2</button>
      </div>
    </div>
  )
}

export default App
