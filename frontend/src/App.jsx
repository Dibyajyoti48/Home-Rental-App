import React from 'react'; // Adjust the path if needed
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Adjust the path if needed
import Homepage from './Pages/Homepage'; // Adjust the path if needed
import Registerpage from './Pages/Registerpage';// Adjust the path if needed
import LoginPage from './Pages/LoginPage';
import CreateListing from "./Pages/CreateListing";
import ListingDetails from "./Pages/ListingDetails";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Registerpage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/create-listing" element={<CreateListing/>} />
        <Route path="/listings/:listingId" element={<ListingDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
