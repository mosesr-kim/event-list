import Signup from './components/signup';
import Login from './components/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const defaultValues = {
    isAuth: false,
    token: null,
    username: ''
  };

  const [auth, setAuth] = useState(defaultValues);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="login" element={<Login auth={{auth, setAuth}} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
