import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "../components/create/create";
import Already from "../components/already/already";
import Have from "../components/have";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Have />} />
          <Route path="/create-account" element={<Create />} />
          <Route path="/login" element={<Already />} />
        </Routes>
    </>
  );
}

export default App;
