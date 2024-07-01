import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./Cardsid.css";
import Stars from "./../Stars/Stars";
import Footer from "./../Footer/Footer";








function Cardsid() {

    
    const [Cardsid,setCardsid] = useState([]);
    const params=useParams();

    useEffect(() => {

        axios
        .get(`http://localhost:8002/Cards/${params.id}`)
        .then((result)=>{
     
         setCardsid(result.data);
     
     
     });
     
     
     },[]);

 
    return(
        <>


        <div className="prdouct">

        <img src={Cardsid.url} />
        
        
        <br />

        <div className="prdouct1">
       
        {Cardsid.title}

        <br />

        {Cardsid.price}$
       
          
            <br />  
            {Cardsid.info}

            <hr />

            <div className="text22">
                <p>
Brand :	Mielle Organics
<br />
Scent :	Rosemary
<br />
Item Weight :	120 Grams
<br />
Item Form :	Oil
<br />
Material Type Free :	Paraben Free
</p></div>

            

          
            
            </div> 
            <br />

            <div className="about-prdouct">
               <p><h1>About this item </h1>
                <br />
NOURISH & STRENGTHEN: Our nutrient-rich, biotin-infused treatment <br />can be used as part of your everyday hair care routine or as an intensive deep treatment to prevent damage for strong, lustrous hair with a fresh, invigorating scent
SMOOTH SPLIT ENDS: This lightweight treatment nourishes split ends <br />for a sleek look; Apply to the ends of hair before you shampoo to soothe and smooth for a healthy, shiny finish that can be air-dried or styled as desired
SOOTHE DRY SCALP: This rich blend of over 30 essential oils and nutrients <br /> deeply penetrates the scalp to increase circulation, combat dandruff, and comfort itchy, sensitive skin while working to strengthen, lengthen, nourish, and protect hair
SAFE FOR ALL HAIR TYPES: Our versatile Rosemary Mint Scalp & Hair Strengthening <br /> Oil promotes radiant hair for all hair types and deeply nourishes types 3A to 4C, chemically-treated hair, braids, weaves, and both low and high porosity level hair
BY WOMEN FOR WOMEN: Mielle Organics aims to empower women of all hair types and <br />styles with powerful products and gentle, organic ingredients that amplify your natural beauty and are the “root to results” that leave you looking and feeling your best</p>

<div className="starss"><Stars/>4.6</div>

<hr />

<h1> -10% </h1>  <h1> $188.54 <br />
Last Price: $209.99</h1>

<br />

<h2> Available at a lower price from other <br /> 
sellers that may not offer free Prime shipping.</h2>

</div>

    
        </div>

        <Footer/>

       
        </>

    ) 
    
}


export default Cardsid