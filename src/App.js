import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./authentication/AuthProvider";
import Home from "./pages/Home";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Home />
      </div>
    </AuthProvider>
  );
}

export default App;
