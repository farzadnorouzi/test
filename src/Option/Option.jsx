import "./Option.css";

//create option

function Option() {
    return(
        <div className="option1">
        <select >
            <option value="english">english</option>
            <option value="farsi">farsi</option>
            <option value="arabic">arabic</option>
            <option value="russia">russia</option>
        </select>

        </div>

    )
    
}

export default Option