import { Route, Routes } from "react-router-dom";
import EditOrDeleteURLs from "./components/EditOrDeleteURL/EditOrDeleteURLs";
import Footer from "./components/Footer/Footer";
import History from "./components/History/History";
import Home from './components/Home';
import Navbar from "./components/Navbar/Nav";
function App() {
  
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/edit-or-delete" element={<EditOrDeleteURLs/>}/>
        <Route path="/history" element={<History/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
