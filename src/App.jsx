
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Login from "./pages/login/index";
import Feed from "./pages/feed/index"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/feed" element={<Feed />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
