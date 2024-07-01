import Option from "../Option/Option";
import "./Navbar.css";
import download from "./Navbar.img/amazonpng.parspng.com_.png";


function Navbar() {
    return(



//create navbar

        <div className="conteiner">

              <nav>
                
                <img className="logoamazon" src={download}/>
                <input className="input" type="text"  placeholder="search amazon..." />
                <button className="btn13">search</button>
                <Option />
                 
                </nav>
                
                 </div>
          
            
            
            
        
        
    )
    
}

export default Navbar