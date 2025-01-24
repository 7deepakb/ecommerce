import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Shop from './components/Shop'
import Product from './components/Product'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Login from './components/admin/Login'
import { ToastContainer, toast } from 'react-toastify'
import Dashboard from './components/admin/Dashboard'
import { AdminRequireAuth } from './components/admin/AdminRequireAuth'

import { default as ShowProducts } from './components/admin/products/Show'
import { default as CreateProduct } from './components/admin/products/Create'
import { default as EditProduct } from './components/admin/products/Edit'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>

          <Route path='/admin/login' element={<Login/>}/>
          <Route path='/admin/dashboard' element={
            <AdminRequireAuth>
              <Dashboard/>
            </AdminRequireAuth>
          }/>

          <Route path='/admin/products' element={
            <AdminRequireAuth>
            <ShowProducts/>
          </AdminRequireAuth>
          }/>

          <Route path='/admin/products/create' element={
            <AdminRequireAuth>
            <CreateProduct/>
          </AdminRequireAuth>
          }/>

          <Route path='/admin/products/edit/:id' element={
            <AdminRequireAuth>
            <EditProduct/>
          </AdminRequireAuth>
          }/>

        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
