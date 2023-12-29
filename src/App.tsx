
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Login from "./pages/login/index";
import Feed from "./pages/feed/index"
import Cadastro from './pages/cadastro/index'
import { AuthContextProvider } from "./context/auth";


function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
