import { useSelector, useDispatch } from 'react-redux'
import { getTodo } from '../redux/todoSlice'

export default function Results({list,setList}){

  function deleteTodo(index){
    let newList = [...list]
    newList.splice(index,1)
    setList(newList)
  }

  function checkTodo(index){
    let newList = [...list]
    if(newList[index].isCompleted){
      newList[index].isCompleted = false
    }else{
      newList[index].isCompleted = true
    }
    setList(newList)
  }

  return(
    <ul className='mt-10 flex flex-col gap-5'>
      {list.map((item,index) => (
        <li 
          key={index}
          className='bg-white dark:bg-slate-800 flex justify-between w-10/12 mx-auto'
        >
          <p className={`text-slate-800 dark:text-white ${item.isCompleted ? 'text-slate-300 dark:text-slate-500 line-through' : ''}`}>{item.text}</p>
          <div className='flex gap-3'>
            <i 
              className={`fas fa-check fa-xl text-slate-800 dark:text-white cursor-pointer hover:text-slate-500`}
              onClick={() => checkTodo(index)}
            ></i>
            <i 
              className='fas fa-x fa-xl text-slate-800 dark:text-white cursor-pointer hover:text-slate-500'
              onClick={() => deleteTodo(index)}
            ></i>
          </div>
        </li>
      ))}
    </ul>
  )
}