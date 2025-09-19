import React from "react"
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromZephyr } from "../ai"


export default function Main() {
    const [ingredient, setIngedient] = React.useState([]);


    function handleSubmit(formData) {

        const newIngredient = formData.get("ingredient")
        setIngedient(prevIngredient => ([...prevIngredient, newIngredient]))
        console.log(ingredient)

    }

    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)

    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            const yCoord = recipeSection.current.getBoundingClientRect().top + window.scrollY
            window.scroll({
                top: yCoord,
                behavior: "smooth"
            })
        }
    }, [recipe])

    async function getRecipe() {
        if (ingredient.length === 0) {
            console.warn("Please add ingredients first")
            return
        }

        console.log("Generating recipe for:", ingredient)

        try {
            const recipeMarkdown = await getRecipeFromZephyr(ingredient)

            //  full API response
            console.log("Full API response:", recipeMarkdown)

            //  the recipe content
            setRecipe(recipeMarkdown)

        } catch (err) {
            console.error("Recipe generation failed:", err)
        }
    }

    return (
        <main>
            <form className="ingredient_form mb-5" action={handleSubmit} >
                <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient"></input>
                <button >Submit</button>
            </form>

            {ingredient.length > 0 && <IngredientsList getRecipe={getRecipe} ingredient={ingredient} />}


            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}