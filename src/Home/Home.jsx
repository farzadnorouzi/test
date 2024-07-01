import { useEffect, useState } from "react"
import Cards from "../Cards/Cards"
import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import Slider from "../Slider/Slider"
import axios from "axios"
import "./Home.css";
import { Link } from "react-router-dom"
import Signin from "../Signin/Signin"
import Footer from "../Footer/Footer"





function Home() {

   const [Carts,setCarts]=useState([]);

    useEffect(()=>{
        axios.
        get("http://localhost:8002/Cards")
        .then((result)=>{
            setCarts(result.data)

    })
    },[])

    return(
         <>
        <Navbar />
        <Header />
        <Slider />

     <div className="Carts">
        {Carts.map((item)=>{
            return(
          <Link to={`/Cards/${item.id}`}>
            <Cards key={item.id}  data={item}/>
            </Link>
    )}
    )}
</div>
        <Signin />

        <Footer />
   
   <video controls loop>
    <source src="/src/Video/9527cdb6077a0df62c8e7341f805a5145913406-180p.mp4"/>
   </video>

        
  
      
        </>
    )
    
}

export default Home