
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Login from "./pages/login/index";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
