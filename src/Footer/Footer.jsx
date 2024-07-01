import  "./Footer.css";
import download from "./../Navbar/Navbar.img/amazonpng.parspng.com_.png";


function Footer() {
    return(

        <>
        <div className="Footer">
            
            <div className="Footer1">

            <h3>Get to Know Us</h3>
                <h5>Careers</h5>
                <h5>Blog</h5>
                <h5>About Amazon</h5>
                <h5>Investor Relations</h5>
                <h5>Amazon Devices</h5>
                <h5>Amazon Science</h5>

                </div>
                <br />
                
                <div className="Footer2">
                <h3>Make Money with Us</h3>
                <h5>Careers</h5>
                <h5>Blog</h5>
                <h5>About Amazon</h5>
                <h5>Investor Relations</h5>
                <h5>Amazon Devices</h5>
                <h5>Amazon Science</h5>
                </div>
                <br />
                 
                 <div className="Footer3">
                <h3>Amazon Payment Product</h3>
                <h5>Careers</h5>
                <h5>Blog</h5>
                <h5>About Amazon</h5>
                <h5>Investor Relations</h5>
                <h5>Amazon Devices</h5>
                <h5>Amazon Science</h5>
                </div>
                <br />
                
                <div className="Footer4">
                <h3>Let Us Help You</h3>
                <h5>Careers</h5>
                <h5>Blog</h5>
                <h5>About Amazon</h5>
                <h5>Investor Relations</h5>
                <h5>Amazon Devices</h5>
                <h5>Amazon Science</h5>

                </div>

                 

                 </div>
    
    <hr />
             <div className="Footerdown">
                
             <img src={download} />

                <select className="Footerdown1">
                    <option value="en">english</option>
                    <option value="arab">arabic</option>
                    <option value="esp">espanish</option>
                </select>
                
                 <div className="butn1"><button className="butn">$ usd-U.S.Dollar</button></div>
                 <div className="butn2"><button className="butnn">united states</button></div>
                </div>

            </>
        
    )
    
}

export default Footer