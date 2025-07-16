import { useEffect, useState } from 'react'
import './App.css'
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY; 
const staticJson = 'meal_prep\staticJson.json';

//  setList(staticJson);

function App() {
  const [list, setList] = useState(null)

  const query = `https://api.spoonacular.com/recipes/?apiKey=${ACCESS_KEY}`;

  useEffect(() => {

    const fetchallFoodData = async (query) => {
      try {
        const response = await fetch(query);
        const json = await response.json(); 
        setList(json);
        console.log(json);
      } catch (error) {
        console.error("Error fetching from API:", error);
    }}

    fetchallFoodData(query)
  }, []);

  return (
    <>
      <div>
        <h1>Ingredient Prepper</h1>
        <ul>
        {list &&
            Object.entries(list)
            .filter(([_, foodData]) => foodData.title)
            
            .map(([key, value], idx) => (value && (
                <li>{value}</li>

            )))}
        </ul>

        <ul>
          <li><strong>Title:</strong> {list.title}</li>
          <li><strong>Servings:</strong> {list.servings}</li>
          <li><strong>Ready in:</strong> {list.readyInMinutes} minutes</li>
          <li><strong>Image:</strong> <img src={list.image} alt={recipe.title} width="200" /></li>
          <li><strong>Source:</strong> <a href={list.sourceUrl} target="_blank" rel="noopener noreferrer">View Recipe</a></li>
        </ul>
      </div>
    </>
  )
}

export default App
