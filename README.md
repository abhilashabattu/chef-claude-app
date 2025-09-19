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

npm install

Install the dependencies:

npm install

.env.local

Create a file named .env.local in the project root and add your Hugging Face token:

REACT_APP_HF_ACCESS_TOKEN=your_token_here


Make sure .env.local is in .gitignore so your token does not get uploaded to GitHub.


npm start

Runs the app in development mode.
Open http://localhost:3000
 to view it in your browser.

The page will reload when you make changes.
You may also see errors in the console if the API token is missing or invalid.

npm run build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

Project Structure
src/
├── components/
│   ├── Header.jsx
│   ├── Main.jsx
│   ├── IngredientsList.jsx
│   └── ClaudeRecipe.jsx
├── ai.js
├── App.js
├── App.css
└── index.js
