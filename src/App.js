import './App.sass';
import { useEffect, useState } from 'react';
import MyRecipeComponent from './MyRecipeComponent';
import imagePng_B from './burger.png';
import imagePng_S from './suppe.png';
import imagePng_V from './vector.png';


function App() {

  const [myRecipeSearch, setMyRecipeSearch] = useState("");
  const [myRecipe, setMyRecipe] = useState([]);
  const [wordSumitted, setWordSumitted] = useState("");

  const API_ID = "3c9e5432";
  const API_KEY = "be6b5065c6541f00e552f5e39a87e60c	";
  
  useEffect(() => {
   async function FetchData() {
    const respons = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSumitted}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await respons.json();
    setMyRecipe(data.hits);
    console.log(data.hits);
   } FetchData(); 
  }, [wordSumitted]);

  const mySearch = (e) => {
    setMyRecipeSearch(e.target.value);
  }

  const finelSearch = (e) => {
    e.preventDefault();
    setWordSumitted(myRecipeSearch)
  }
  return(
    <div className='main'>

      <div className="container_flex">
        <h1>Find a Recipe</h1>
      </div>

      <div className="container_flex">
        <form onSubmit={finelSearch}>
          <input type="text" placeholder='Search...' onChange={mySearch} value={myRecipeSearch}></input>
        </form>
      </div>

      {myRecipe.map(element => (
        <MyRecipeComponent caloriesProps={element.recipe.calories} image={element.recipe.image} 
        nameProps={element.recipe.label} ingredients={element.recipe.ingredientLines} />
      ))}

      <img src={imagePng_V} className="image_png_v" alt='png' />
      <img src={imagePng_B} className="image_png_b" alt='png' />
      <img src={imagePng_S} className="image_png_s" alt='png' />
    </div>
  );
}

export default App;
