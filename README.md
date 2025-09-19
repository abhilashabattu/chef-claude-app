# Chef Claude App
# Recipe Generator Application

A React-based web application that allows users to generate recipes based on the ingredients they have. Users can add ingredients, view their ingredient list, and get AI-powered recipe suggestions using HuggingFace's Zephyr model.

## Features

- Add multiple ingredients to a list
- View ingredients dynamically in a user-friendly list
- Generate AI-based recipes from your ingredients
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

2. **Install dependencies**
   npm install
    or
   yarn install

3. **Configure environment variables**

⦁	Create a .env.local file in the project root

⦁	Add your HuggingFace API token:
	```bash
	REACT_APP_HF_ACCESS_TOKEN=your_huggingface_token_here
4. **Run the development server**

   ```bash
   npm start
   # or
   yarn start

5. **Access the application**
   -Open your browser and go to http://localhost:3000

Project Structure

```bash
ChefClaudeApp/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── ai.js                   # AI API integration
│   ├── App.js                  # Main App component
│   ├── App.css                 # App styling
│   ├── components/
│   │   ├── Header.jsx          # Header component
│   │   ├── Main.jsx            # Main component
│   │   ├── IngredientsList.jsx # Ingredient list component
│   │   └── ClaudeRecipe.jsx    # Recipe display component
│   ├── images/                 # Logo and images
│   └── index.js                # Entry point
├── .env.local                  # Environment variables (API token)
├── package.json
└── README.md
