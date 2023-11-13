import { Routes, Route } from 'react-router-dom'

// import ContactUs from './ContactUs'
import Categories from './Pages/Categories'
import Home from './Pages/Home'

import NoMatch from './Pages/NoMatch'
import Products from './Pages/Products'
import Cart from './Pages/Cart'

import ProductContext from './Context/ShopContext'
import SignUp from './components/SignUp'
import RootLayout from './Layouts/RootLayout'
import Login from './components/Login'
import TestPage from './Pages/TestPage.jsx'
import Autoplaypage from './Pages/Autoplaypage.jsx'

function App() {
  return (
    <>
      <ProductContext>
        <div className="App">
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<RootLayout />}>
              <Route index element={<Home />} />

              <Route
                path="/home/categories/:categoryName"
                element={<Categories />}
              />
              <Route
                path="/home/categories/:categoryName/:priceRange"
                element={<Categories />}
              />

              <Route path="/home/categories/products" element={<Products />} />
              <Route
                path={`/home/categories/products/:productId`}
                element={<Products />}
              />

              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
            <Route path="test" element={<TestPage />} />
            <Route path="autoplay" element={<Autoplaypage />} />
          </Routes>
        </div>
      </ProductContext>
    </>
  )
}

export default App
