import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Product from './component/Product';
// import Main from './component/Main';
import Form from './component/Form';
import Payment from './component/Payment';
import Bill from './component/Bill';
import Confirm from './component/Confirm';
function App() {
  return(
<Router>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/product' element={<Product />}/>
    {/* <Route path='Main' element={<Main />}/> */}
    <Route path='/form' element={<Form />}/>
    <Route path='/payment' element={<Payment />}/>
    <Route path='/bill' element={<Bill />}/>
  <Route path='/confirm' element={<Confirm />}/>
  
  </Routes>
</Router>
  );
}
export default App