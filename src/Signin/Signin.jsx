import { useNavigate } from "react-router-dom";
import "./Signin.css";

function Signin() {

    const Navigate= useNavigate();


   const  handellpage = () => {
    
    Navigate("/Navigatesignin")
}

    return(
        <>
        <hr />

        <div className="botn">
            <button className="botn1" onClick={handellpage}>sign in</button>
                <p>new customer?click here</p>
        </div>

        <hr />
        </>
    )
}

export default Signin