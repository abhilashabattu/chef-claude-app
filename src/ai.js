import { InferenceClient } from '@huggingface/inference'

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they
                       could make with some or all of those ingredients. You don't need to use every ingredient they mention 
                       in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include 
                       too many extra ingredients. Format your response in markdown to make it easier to render to a web page`
 
console.log('Token exists:', !!process.env.REACT_APP_HF_ACCESS_TOKEN)

export async function getRecipeFromZephyr(ingredientsArr) {
    if (!process.env.REACT_APP_HF_ACCESS_TOKEN) {
        console.error('Missing token! Verify:')
        console.error('1. File is named .env.local')
        console.error('2. Contains REACT_APP_HF_ACCESS_TOKEN')
        console.error('3. Located in project root')
        throw new Error("API token not configured")
    }

    const hf = new InferenceClient(process.env.REACT_APP_HF_ACCESS_TOKEN)
    const ingredientsString = ingredientsArr.join(", ")

    try {
        console.log("Sending request to HF API...")
        const response = await hf.chatCompletion({
            model: "HuggingFaceH4/zephyr-7b-beta",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `Ingredients: ${ingredientsString}. Simple recipe:` }
            ],
            parameters: {
                max_new_tokens: 500,
                temperature: 0.7
            }
        })

        console.log("API Response received")
        return response.choices[0].message.content

    } catch (err) {
        console.error("API Error Details:", {
            message: err.message,
            status: err.response?.status,
            data: err.response?.data
        })
        throw new Error(`Recipe generation failed: ${err.message}`)
    }
}