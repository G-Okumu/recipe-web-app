import {recipes} from "./customjs/recipedata.js";
import RecipeList from "./RecipeList.jsx";

function App() {
  return (
    <>

        <h1>Welcome to Recipe App</h1>

        <RecipeList recipes={recipes}/>

        {/*{*/}
        {/*    recipes.map((recipe, index) => (*/}
        {/*    <RecipeList key={index} recipe={recipe}></RecipeList>*/}
        {/*    ))*/}
        {/*}*/}

    </>
  )
}

export default App;
