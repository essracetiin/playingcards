import React from "react";
import { Routes, Route } from "react-router-dom";
import CardDeck from "./components/CardDeck";
// import Chat from "./components/Chat";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<CardDeck />} />
        {/* <Route path="/chat" element={<Chat/>} /> */}
      </Routes>
    </div>
  );
};

export default App;
