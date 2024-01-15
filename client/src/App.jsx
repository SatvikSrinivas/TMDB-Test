
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Login from './Login';
import ForgotPassword from './Reset';
import Discover from './Discover';
import axios from 'axios';

// default baseURL (development)
axios.defaults.baseURL = "http://localhost:8000";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<ForgotPassword />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
