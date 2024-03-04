import { BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./components/about";
import User from "./components/user";
import Filter from "./components/Filter";
import Contact from "./components/Contact";

import Filtersforurl from "./components/Urlfilter";
import './App.css';

import NotFound from "./components/notFound";
import Bengaluru from "./components/Bengaluru";
import Dehli from "./components/Dehli";
import Home from "./components/Home";
import Protected from "./components/Protected";
import Login from "./components/Login";
import Services from "./components/Services";
 import Feach from "./components/Feach";
function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Navbar></Navbar>
 
   

   <Routes>
    <Route path="/" element={<Protected Component={Home}/>}/>
    <Route path="/Urlfilter" element={ <Protected Component={Filtersforurl}/>} /> 
    <Route path="/about" element={<Protected Component={About}/>}/>
    <Route path="/login" element={<Login></Login>}/>
    <Route path="/Filter" element={<Protected Component={Filter}/>}/>
    <Route path="/services" element={<Protected Component={Services}/>}/>
    
    <Route path="/Feach" element={<Protected Component={ Feach}/>}/>

    <Route path="/Contact/" element={ <Protected Component={Contact}/>  }>
      <Route path="Bengaluru"  element={<Bengaluru></Bengaluru>}/>
      <Route path="Dehli" element={<Dehli></Dehli>}/>
    </Route>

    {/* <Route path="/*" element={<h1>this page in not found</h1>}/> */}
    <Route path="/*" element={<NotFound/>}/>
    {/* <Route path="/*" element={<Navigate to="/"/>}/> */}
    <Route path="/user/:country" element={<User></User>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
