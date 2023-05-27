
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Admin_PriverRouts from './pages/Admin_PriverRouts';

import All_route from './pages/All_route';
import { AiOutlineUser } from "react-icons/ai";

function App() {
  return (
    <div className="App">
<Navbar/>
<All_route/>


    </div>
  );
}

export default App;
