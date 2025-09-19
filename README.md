# Chef Claude App  

This project is a small React application that helps you generate recipes based on the ingredients you have.  
You can add items to the list and when you’re ready, the app uses Hugging Face’s Zephyr model to suggest a recipe.  
The recipe is displayed in a clean markdown format for easy reading.  

## Features  

- Add ingredients one by one through a simple form  
- View a live list of all the ingredients you’ve added  
- Generate a recipe when you have enough ingredients  
- Recipes are displayed in a clean, readable format  
- Smooth scroll to the recipe section for better user experience  

## Tech Stack  

- React.js  
- React Markdown (for rendering recipes)  
- Hugging Face Inference API (Zephyr model)  
- JavaScript, HTML, CSS  

## Setup  

In the project directory, you can run:  

### `git clone`  

Clone this repository and go inside it:  

```bash
git clone https://github.com/yourusername/chef-claude-app.git
cd chef-claude-app
