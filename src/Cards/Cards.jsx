import "./Cards.css";

function Cards(props) {
    return(
        <div className="cards" >

            <div><img src={props.data.url}/></div>
                 <p>{props.data.title}</p>
                <p>{props.data.price}$</p>

            
            
        </div>
    )
    
}

export default Cards