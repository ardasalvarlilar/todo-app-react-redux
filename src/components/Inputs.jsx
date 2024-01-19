import { useRef } from 'react'
import Results from './Results'
import { useSelector, useDispatch } from 'react-redux'
import { getTodo} from '../redux/todoSlice'
import { pushList as pushListAction  } from '../redux/listSlice'


export default function Inputs() {
  const inputRef = useRef()
  const todo = useSelector((state) => state.todo)
  // const list = useSelector(state => state.list)
  // console.log(list)

  const dispatch = useDispatch()


  function getInputValue(e){
    dispatch(getTodo(inputRef.current.value))
    
    if(e.code === 'Enter'){
      dispatch(pushListAction(todo))
      inputRef.current.value = ''
    }
  }
  
  function handleClick(){
    dispatch(pushListAction(todo))
    inputRef.current.value = ''
  }

  
  return (
    <div className=' w-full md:w-8/12 mx-auto'>
      <input
        ref={inputRef}
        type="text"
        className='text-slate-800 dark:text-white w-10/12 px-4 py-2 border rounded-lg border-slate-800 dark:bg-slate-800 dark:border-white'
        onKeyUp={(getInputValue)}
      />
      <button 
        className=' w-auto px-6 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-800 dark:border-white rounded-lg hover:bg-slate-800 hover:text-white hover:border-white hover:dark:bg-white hover:dark:text-slate-800'
        onClick={handleClick}
      >Todo ekle</button>

      <Results/>
    </div>
  )
}
