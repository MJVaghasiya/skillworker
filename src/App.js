import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import WorkerSignup from './components/WorkerSignup';
// import Bus from './components/BusinessSignup';
import BusinessSignup from './components/BusinessSignup';
import Worker from './components/Worker';




function App() {
  return (
    <div className="App">
 <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Log-in' element={<Login/>}></Route>
    <Route path='/Sign-up' element={<Signup/>}></Route>
    <Route path='/BusinessSignup' element={<BusinessSignup/>}></Route>
    <Route path='/WorkerSignup' element={<WorkerSignup/>}></Route>
    <Route path='/Worker' element={<Worker/>}></Route>
   </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
