import {recipes} from "./customjs/recipedata.js";
import RecipeList from "./RecipeList.jsx";

function App() {
  return (
    <>

        <h1 className="text-center text-2xl mt-4 font-bold text-blue-500">Welcome to Recipe App</h1>

        <div className={"grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 gap-4 mx-20 mt-20"}>
            <RecipeList recipes={recipes}/>
        </div>
    </>
  )
}

export default App;
