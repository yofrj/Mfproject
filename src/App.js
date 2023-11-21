import './App.css';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import {Navbar} from './components/navbar'
import {Shop} from "./pages/shop/shop"
import {Cart} from "./pages/cart/cart"
import { Provider } from 'react-redux';
import store from './redux/store';
import { CartItem } from './pages/cart/cart-item';
import Login from './pages/login';
import { useEffect } from 'react';
import { addUsers, authUsers } from './redux/redusers/action';

function App() {


  useEffect(()=>{

    const localuser= localStorage.getItem("username:")
   console.log(localuser)
   },[])

  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
      </Provider>
 
    </div>
  );
}

export default App;
