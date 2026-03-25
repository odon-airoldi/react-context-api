import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import Product from './pages/Product'
import Category from './pages/Category'
import Error404 from './pages/Error404'
import AppLayout from './layouts/AppLayout'

import { BudgetProvider } from './context/BudgetContext'



function App() {




  return (
    <BudgetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/products/category/:category" element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BudgetProvider>
  )
}

export default App
