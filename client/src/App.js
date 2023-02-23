import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import Login from "./pages/login/login";
import { ShopContextProvider } from "./context/shop-context";
import {Footer} from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className='App'>
       <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
      </Router>
      </ShopContextProvider>
    </div>
    </ApolloProvider>
    );
}

export default App;
