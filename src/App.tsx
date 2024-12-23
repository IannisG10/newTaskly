import './App.css'
import Home from './Layout/Home/Home'
//import HomeTest from './components/HomeTest'
import Done from './Layout/Done/Done'
 import { Routes,Route } from 'react-router-dom'
// import { useEffect } from 'react'
// import { fetchData } from './redux/reducer/CounterSlice'
// import { useAppDispatch } from './redux/hook'
import Auth from './Auth/Auth'


function App() {
  return (
    <div >
       <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Auth/>}/>
          <Route path='/done' element={<Done/>}/>
      </Routes> 

    </div>
  )
}

export default App
