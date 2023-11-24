import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar"
import Dashboard from './components/dashboard/dashboard';
import Products from './components/products/products';
import Orders from './components/orders/orders';
import './App.css'

function App() {

  return (
    <div style={{ display: 'flex' }}>
      <Router>
        <SideBar style={{ flex: 1 }} />
        
        <div style={{ flex: 4 }}>
         <div className='bg-background-grey h-full pt-8 pl-4'>
           <Routes >
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/login" element={<h1>Login</h1>} />
            <Route path="/register" element={<h1>Register</h1>} />
          </Routes>
         </div>
        </div>
      </Router>
    </div>
  )
}

export default App