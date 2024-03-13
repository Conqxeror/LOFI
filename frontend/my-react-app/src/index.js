import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/LOFI/Nav/Nav";
import Upper from "./pages/upper/upper";
import Lostandfound from "./pages/lostandfound/lostandfound";
import Postanitem from "./pages/postanitem/postanitem";
import About from "./pages/About/About";
import Loginsignup from "./pages/loginsignup/loginsignup";
import Register from "./pages/Register/register";
import Post from "./pages/Post/post";
import Profile from './pages/Profile/Profile';
function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Upper />} />
          <Route path="/lostanfound" element={<Lostandfound />} />
          <Route path="/postanitem" element={<Postanitem />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/login" element={<Loginsignup />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post" element={<Post />} />
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
