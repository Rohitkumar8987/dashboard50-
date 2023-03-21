import { useState } from 'react'

import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
import './App.css'
import Customers  from './components/Pages/Customers'
import Dashboard from './components/Pages/Dashboard'
import Estimates from './components/Pages/Estimates'
import Invoices from './components/Pages/Invoices'
import PurchaseOrder from './components/Pages/Purchase Order'
import Quotes from './components/Pages/Quotes'
import Receiveditems from './components/Pages/Receiveditems'
import Reports from './components/Pages/Reports'

import Venders from './components/Pages/Venders';
import WantBook from './components/Pages/Want Book'
import Settings from './components/Pages/Settings'
import Salesorder from './components/Pages/Salesorder'

import Addcustomers from './components/Pages/Addcustomers';
import Addvendor from './components/Pages/Addvendor';
import Sidebars from './components/Style/Sidebars';
import Newpurchase from './components/Pages/Newpurchase';

import P0 from './components/Pages/P0';


// import Vendor from './components/Pages/Vendors';


function App() {
  const [count, setCount] = useState(0)
  

  return (
    
    // <NavLink className="selected">
     <BrowserRouter>
     <Sidebars>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/Customers" element={<Customers/>}/>
        <Route path="/customers/new" element={<Addcustomers/>}/>
        <Route path="/Estimates" element={<Estimates/>}/>
        <Route path="/Invoices" element={<Invoices/>}/>
        <Route path="/purchaseorder" element={<PurchaseOrder/>}/>
        <Route path="/purchase/new" element={<Newpurchase/>}/>
        <Route path="/purchaseorder/:id" element={<P0/>}/>
        <Route path="/Quotes" element={<Quotes/>}/>
        <Route path="/Receiveditems" element={<Receiveditems/>}/>
        <Route path="/Reports" element={<Reports/>}/>
        <Route path="/Settings" element={<Settings/>}/>
        <Route path='/Salesorder'element={<Salesorder/>}/>
        <Route path='/vendors' element={<Venders/>}/>
        <Route path="/venders/new" element={<Addvendor/>}/>
        <Route path="/WantBook" element={<WantBook/>}/>
      </Routes>
      </Sidebars>
     </BrowserRouter>
   
      // </NavLink>
  )
}

export default App
