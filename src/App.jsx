import './App.css'
import {Routes,Route } from 'react-router-dom'
import { Home } from './layout/Home';
import { Detail } from './layout/Detail';
import { AllProduct } from './layout/AllProduct';
import { Login } from './Component/Login/Login';



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/allproduct" element={<AllProduct />} />
        <Route path="/login" element ={<Login/>}/>
    

      </Routes>
    </>
  )
}

export default App
