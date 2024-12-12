import './App.css'
import Home from './Layout/Home/Home'
import Done from './Layout/Done/Done'
import { Routes,Route } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchData } from './redux/reducer/CounterSlice'
import { useAppDispatch } from './redux/hook'


function App() {

  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(fetchData())
  },[])
  

  return (
    <div >
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/done' element={<Done/>}/>
      </Routes>

    </div>
  )
}

export default App
