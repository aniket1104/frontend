import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Transfer from "./pages/Transfer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transfer" element={<Transfer />} />
      </Routes>
    </>
  );
}

export default App;
