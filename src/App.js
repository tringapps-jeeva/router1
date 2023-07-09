import { BrowserRouter, Route,  Routes, useLoaderData } from 'react-router-dom';
import './App.css';
import RootLayouts from './Layouts/RootLayouts';
import Home from './pages/Home';
import About from './pages/About';
import ContactLayout from './Layouts/ContactLayout';
import Mail from './pages/Mail';
import Phone from './pages/Phone';
import Pagenotfound from './pages/Pagenotfound';
import CareerLayout from './Layouts/CareerLayout';
import Career, { careerLoader } from './pages/Career';
import { useEffect, useState } from 'react';
import Careerdetails from './pages/Careerdetails';


function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayouts></RootLayouts>}>
          <Route index element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/contact' element={<ContactLayout />}>
            <Route path='mail' element={<Mail/>}/>
            <Route path='phone' element={<Phone/>}/>
          </Route>
          <Route path='careers' element={<CareerLayout/>}>
              <Route index element={<Career/>} />
              <Route path=':id' element={<Careerdetails/>}/>
          </Route>
          <Route path='*' element={<Pagenotfound/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
