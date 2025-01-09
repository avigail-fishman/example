import { useState } from "react";
import RecipeCard from "./RecipeCard";
import RecpieDetails from "./RecpieDetails";

function RecipiesList() {
    const [recipies,setRecipies] = useState([
        {
            id: 1, 
            name: "בקר", 
            ingredients: ["בקר", "מים"],
            instructions: ["להכניס לסיר", "לבשל 5 שעות"],
            level: 1,
            time: "01:00", 
            img: "bakar.jpg"
        },  {
            id: 2, 
            name: "2בקר", 
            ingredients: ["בקר", "מים"],
            instructions: ["להכניס לסיר", "לבשל 5 שעות"],
            level: 1,
            time: "01:00", 
            img: "choulent.jpg"
        },  {
            id: 3, 
            name: "3בקר", 
            ingredients: "מים ובקר",
            instructions: "לבשל 3 שעות",
            level: 1,
            time: "01:00", 
            img: "gulash.jpg"
        }

    ]);
    return <>
        <h1>מתכונים</h1>
        {recipies.map(r=><RecipeCard recipe={r} />)}
        {/* {recipies.map(r=><p>{r.name}</p>)} */}


    </>
}

export default RecipiesList;