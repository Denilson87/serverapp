import {BrowserRouter, Switch, Route, Routes} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import About from './pages/About';
import Header from './components/Header/Header'

function App() {
  return (
  <>
   <Header/>
    <div className="App">
      <ToastContainer/>
      <Routes>
        <Route  exact path="/" element={<Home/>}/>
        <Route  path="/add" element={<AddEdit/>}/>
        <Route  path="/update/:id" element={<AddEdit/>}/>
        <Route  path="/view" element={<View/>}/>
        <Route  path="/about" element={<About/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
