import React from 'react'; // Adjust the path if needed
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Adjust the path if needed
import Homepage from './pages/Homepage'; // Adjust the path if needed
import Registerpage from './Pages/Registerpage';// Adjust the path if needed
import LoginPage from './Pages/LoginPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Registerpage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

