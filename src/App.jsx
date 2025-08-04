import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from "./components/Footer";

const ProductList = lazy(() => import('./components/ProductList'))
const ProductDetail = lazy(() => import('./components/ProductDetail'))
const Cart = lazy(() => import('./components/Cart'))
const NotFound = lazy(() => import('./components/NotFound'))

export default function App() {
  return (
    <Router>
      <Header />
      <main className="px-4 py-6 bg-gray-50 min-h-screen">
        <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer/>
    </Router>
  );
}
