import { BrowserRouter,Routes,Route } from 'react-router-dom';

//components imports
import Homepage from './components/homepage';
import Signup from './components/signup';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Signin from './components/signin';
import About from './components/About';
import Contact from './components/contacts';

function App ()
  { 
  
  return (
    <BrowserRouter>
    <Navbar/>
    
   <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/signin' element={<Signin/>}></Route>
    <Route path='/contacts' element={<Contact/>}></Route>
   </Routes>
    
   <Footer/>
   </BrowserRouter>
  );
}

export default App;

