import "./stars.css";
import ReactStars from "react-rating-stars-component";



function Stars() {

     
const ratingChanged = (newRating) => {
    console.log(newRating);
  };

    return(

    

        <div className="stars">
    
          <ReactStars
          count={5}
          size={24}
          onChange={ratingChanged}
          isHalf={true}
          activeColor="#ffd700" />
         
               </div>


             

    )
    
}

export default Stars