import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import { Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <>           
    <Navbar />      
      <Routes>
        <Route 
          path='/' 
          element={<Home/>}
        />
        <Route 
          path='/products' 
          element={<Products/>}/>
      </Routes> 
    </>
  );
}

export default App;
