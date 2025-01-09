import { Link } from "react-router-dom";
import { cardImgStyle } from "../styles";

function RecipeCard({ recipe }) {
    return <><div>
        <img src={"/images/" + recipe.img} style={cardImgStyle} />
        <p>{recipe.name}</p>
        <Link to={"/recipeDetails/"+recipe.id+"/"+recipe.name}>לפרטים נוספים</Link>
    </div></>

}

export default RecipeCard;