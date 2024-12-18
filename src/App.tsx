import './App.css'
import Home from './Layout/Home/Home'
// import Done from './Layout/Done/Done'
 import { Routes,Route } from 'react-router-dom'
// import { useEffect } from 'react'
// import { fetchData } from './redux/reducer/CounterSlice'
// import { useAppDispatch } from './redux/hook'
import Auth from './Auth/Auth'


function App() {

  // const dispatch = useAppDispatch()

  // useEffect(()=>{
  //   dispatch(fetchData())
  // },[])
  

  return (
    <div >
       <Routes>
          <Route path='/' element={<Auth/>}/>
          <Route path='/home' element={<Home/>}/>
      </Routes> 
      

    </div>
  )
}

export default App
