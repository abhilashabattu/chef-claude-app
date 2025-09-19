# Chef Claude App
# Recipe Generator Application

A React-based web application that allows users to generate recipes based on the ingredients they have on hand. Users can add ingredients, view their ingredient list, and get suggested recipes from an AI-powered backend using HuggingFace's Zephyr model.

## Features

- Add multiple ingredients to a list
- View ingredients dynamically in a user-friendly list
- Generate AI-based recipes using your ingredients
- Recipe output formatted in Markdown for readability
- Smooth scrolling to the recipe section after generation
- Responsive design

## Technologies Used

- React.js
- JavaScript (ES6+)
- HTML/CSS
- React Markdown
- HuggingFace Inference API (`@huggingface/inference`)
- Environment variables for API authentication
- Bootstrap (optional, for styling)

### Prerequisites

1. Node.js installed (v16 or higher recommended)
2. npm or yarn
3. Git (optional)
4. HuggingFace API access token

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/chef-claude-app.git
   cd chef-claude-app
Install dependencies

bash
Copy code
npm install
# or
yarn install
Configure environment variables

Create a .env.local file in the project root

Add your HuggingFace API token:

env
Copy code
REACT_APP_HF_ACCESS_TOKEN=your_huggingface_token_here
Run the development server

bash
Copy code
npm start
# or
yarn start
Access the application

Open your browser and go to http://localhost:3000

Project Structure
csharp
Copy code
ChefClaudeApp/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── ai.js                  # AI API integration
│   ├── App.js                 # Main App component
│   ├── App.css                # App styling
│   ├── components/
│   │   ├── Header.jsx         # Header component
│   │   ├── Main.jsx           # Main component
│   │   ├── IngredientsList.jsx# Ingredient list component
│   │   └── ClaudeRecipe.jsx   # Recipe display component
│   ├── images/                # Logo and images
│   └── index.js               # Entry point
├── .env.local                 # Environment variables (API token)
├── package.json
└── README.md
Usage
For Users:

Open the app in your browser

Add ingredients using the input field

Ingredients will appear in a dynamic list

Once you have 4+ ingredients, click "Get a recipe"

View the AI-generated recipe formatted in Markdown

Scroll down to see the full recipe

Notes
Ensure your HuggingFace API token is valid and correctly placed in .env.local.

The recipe generator works best with 3–10 ingredients at a time.

You can expand this app to include recipe saving, multiple cuisine types, or sharing options.

Future Improvements
Add user authentication to save recipes

Allow users to select cuisine preferences

Enable copy-to-clipboard or download for recipes

Include ingredient substitutions suggestions
