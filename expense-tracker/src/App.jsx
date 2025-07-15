import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/dashboard/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Expense from './pages/dashboard/Expense';
import Income from './pages/dashboard/Income';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/expense' element={<Expense />} />
          <Route path='/income' element={<Income />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
