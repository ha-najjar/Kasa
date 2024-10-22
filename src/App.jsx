import React from "react";
import AppRouter from "./Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;