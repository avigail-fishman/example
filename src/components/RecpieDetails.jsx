import { useParams } from "react-router-dom";


function RecpieDetails() {

    const { id,name } = useParams();

    return <div> <h1>פרטי מתכון</h1>
        <p>{name}</p>
        <p>מספר המתכון הוא {id}</p> </div>

}

export default RecpieDetails;