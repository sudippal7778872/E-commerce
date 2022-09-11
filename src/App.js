import React from 'react'
import Header from './components/Header'
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./components/Cards"
import CardsDetails from './components/CardsDetails';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Cards/>}/>
        <Route path='/cart/:id' element={<CardsDetails/>}/>
      </Routes>
    </>
  )
}

export default App