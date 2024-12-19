import './App.css';
import About from './Components/About';
 import Service from './Components/Service';
import Contact from './Components/Contact';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Frontend from './Frontend.jsx';
import Feedback from './Components/Feedback.jsx';
function App() {
  return (
    <>
   
     <BrowserRouter>
     {/* <Frontend/> */}
     <Routes>
    
      <Route path="/Service" element={<Service/>}/>  
      <Route path="/" element={<Frontend/>}/>  
        <Route path="/About" element={<About/>}/> 
        <Route path="/Contact" element={<Contact/>}/> 
        <Route path="/Feedback" element={<Feedback/>}/>  
     </Routes>
     
     </BrowserRouter> 
     
      
   
 
    </>
  );
}

export default App;
