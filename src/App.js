import React from "react";
import ProfilPhoto from "./components/profile/ProfilPhoto";
import Name from "./components/profile/ahmedelloumi";
import Adress from "./components/profile/aderss";
import Nav from "./components/profile/navbr";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />

      <br></br>
      <div className="test">
        <ProfilPhoto />
        <br></br>

        <Name />
        <br></br>

        <Adress />
        <br></br>
      </div>
    </div>
  );
}

export default App;
