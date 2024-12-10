import './App.css'
import Home from './Layout/Home/Home'
import Done from './Layout/Done/Done'
import { Routes,Route } from 'react-router-dom'


function App() {
  

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
