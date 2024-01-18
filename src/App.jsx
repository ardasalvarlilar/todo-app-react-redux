import Inputs from './components/Inputs'
import { useState } from 'react'

function App() {

  const [list, setList] = useState([])
  return (
    <div className='bg-white dark:bg-slate-800 min-h-screen'>
      <h1 className="text-center text-slate-800 text-3xl dark:text-white">TODO APP</h1>

      <Inputs setList={setList} list={list}/>
    </div>
  )
}

export default App
