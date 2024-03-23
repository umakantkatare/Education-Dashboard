import "./App.css";

import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL)
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
