// import everything over from pages and fix routes below
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Search from './pages/Search'



function App() {
  return (
    <div className="App">
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element ={<Home />} /> 
      <Route path="/Cart" element ={<Cart />} />
      <Route path="/Login" element ={<Login />} />
      <Route path="/Register" element ={<Register />} />
      <Route path="/Search" element ={<Search />} />
</Routes>
    <Footer />
  </Router>
    </div>
  );
}

export default App;