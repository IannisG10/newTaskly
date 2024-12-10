import './App.css'
import Home from './Layout/Home/Home'
import { Routes,Route } from 'react-router-dom'


function App() {
  

  return (
    <div >

      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>

    </div>
  )
}

export default App
