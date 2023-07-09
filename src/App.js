import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import RootLayouts from './Layouts/RootLayouts';
import Home from './pages/Home';
import About from './pages/About';
import ContactLayout from './Layouts/ContactLayout';
import Mail from './pages/Mail';
import Phone from './pages/Phone';


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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
