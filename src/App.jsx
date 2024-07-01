import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Today from "./Pages/Today/Today";
import Customer from "./Pages/Customer/Costomer";
import Registery from "./Pages/Registery/Registery";
import GiftCard from "./Pages/GiftCard/GiftCard";
import Sell from "./Pages/Sell/Sell";
import Cardsid from "./Cardsid/Cardsid";
import Navigatesingin from "./NavigateButton/NavigateSignin/Navigatesignin";
import "./index.css";



function App() {
  return(
     
    <>
   
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Today" element={<Today/>} />
        <Route path="Customer" element={<Customer/>} />
        <Route path="Registery" element={<Registery/>} />
        <Route path="GiftCard" element={<GiftCard/>} />
        <Route path="Sell" element={<Sell/>} />
        <Route path="/Cards/:id" element={<Cardsid/>} />
        <Route path="/Navigatesignin" element={<Navigatesingin/>} />
    </Routes>

  

    </>
  )
 
}

export default App
