import "./Navigatesignin.css";
import download from "./../../Navbar/Navbar.img/amazonpng.parspng.com_.png";


function Navigatesingin() {
    return(
        <>
        <div className="logo"><img src={download} className="logo2" /></div>

        <div className="Navigatesignin">
            <h2>Sign In</h2>

            <div className="label"><label>email or phone number<input type="text" className="Inputt" /></label></div>

            <br />

            <div className="bttn"><button className="bttn2">contune</button></div>

            <br />

            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice</p>
           
           <div className="select">
            <select className="select2">
                <option value="need help">need help</option>
                <option value="forget passwordd">forget passwordd?</option>
                <option value="Other issues with Sign-In">Other issues with Sign-In</option>
            </select>

            </div>

            <br />
            <hr />
            <h6>Buying for work?<br />
             Shop on Amazon Business</h6>
      </div>

      <div className="createacount"><h5>new to amazon?</h5></div>
       <div className="amazonaccount"><button className="amazonaccount2">create your amazon account</button></div>
      </>
    )
    
}

export default Navigatesingin