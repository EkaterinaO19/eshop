import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import Product from './component/Product';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; 

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Product/>} />
        <Route
          path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main> }/>
      </Routes>
  );
}

export default App;
