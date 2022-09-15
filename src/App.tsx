import React, {useState} from 'react';
import {BrowserRouter as Router,Route,Link,Routes} from "react-router-dom";
import './App.css';
import Room from "./components/Rooms";
import Home from "./components/Home";
import Head from "./components/Header";
import Modal from "./components/modal";


function App() {;
    return (
        <div className="App">
            <Head/>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/roompage" element={<Room />} />
                <Route path="/book" />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
