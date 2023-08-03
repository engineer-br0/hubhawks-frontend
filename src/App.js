import logo from './logo.svg';
import './App.css';
import Signup from './SignupForm';
import Signin from './Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <Routes>
             <Route path='/' element={<Signin/>} />
             <Route path='/signup' element={<Signup/>} />
           </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
