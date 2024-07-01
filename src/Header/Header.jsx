import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return(
        <div className="Header">
            
        <ul>
            <Link to="/Today"><li>todays deals</li></Link>
            <Link to="/Customer"><li>customer servic</li></Link>
            <Link to="/Registery"><li>registery</li></Link>
            <Link to="/GiftCard"><li>gifts cards</li></Link>
            <Link to="/Sell"><li>sell</li></Link>
            
        </ul>
        
        </div>

    )
    
}

export default Header