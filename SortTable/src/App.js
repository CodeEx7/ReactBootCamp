import './App.css';
import React from "react";
import Header from "./component/Header";
import Footer from './component/Footer';
import Mainpage from './component/Mainpage';

function App() {
  return (
    <div>
        <Header/>
        <Mainpage/>
        <Footer/>
    </div>
  );
}

export default App;
