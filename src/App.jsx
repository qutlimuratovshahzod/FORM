import { useReducer, useState } from 'react'
import { addAction, reducer} from './store/store';
function App() {
  const [username, setUsername] = useState('')
  const [surname, setSurname] = useState('')
  
  const [state, dispatch] = useReducer(reducer, {})
  function submitHandler(event) {
    event.preventDefault();
    if (!username.trim() || !surname.trim()) return
    const newUser = {
      username,
      surname
    }
    dispatch(addAction(newUser))
  }

  return (
    <div className="App">
      <div className="container mx-auto">
        {/* <div className=" w-96 p-10 rounded-lg border mx-auto mt-20 shadow-md">
          <h1 className='text-center text-8xl'>{state}</h1>
          <div className='flex gap-4 mt-10'>
            <button onClick={() => dispatch(minusAction)} className='py-3 px-5 rounded-md bg-blue-500 text-white shadow'>MINUS ACTION</button>
            <button onClick={() => dispatch(resetAction)} className='py-4 px-5 rounded-md bg-red-500 text-white shadow'>RESET</button>
            <button onClick={() => dispatch(plusAction)} className='py-3 px-5 rounded-md bg-green-500 text-white shadow'>PLUS ACTION</button>
          </div>
        </div> */}
        <form onSubmit={submitHandler} className='max-w-md mx-auto mt-20 rounded border shadow p-10'>
          <h1 className="text-3xl mb-5">Form</h1>
          <div className='mb-5'>
            <input className='rounded border w-full p-3 text-md focus:outline-blue-300' type="text" placeholder='Username'
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
          </div>
          <div className='mb-5'>
            <input className='rounded border w-full p-3 text-md focus:outline-blue-300' type="text" placeholder='Usersurname'
              value={surname}
              onChange={event => setSurname(event.target.value)}
            />
          </div>
          <button className='w-full p-3 text-lg bg-blue-500 rounded font-semibold text-white hover:bg-blue-900 '>Submit</button>
        </form>
      </div>
      <h1 className="text-red-500">{state.username}</h1>
      <h1 className="text-red-500">{state.surname}</h1>
    </div>
  );
}

export default App;
