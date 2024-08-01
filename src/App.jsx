import {useState} from 'react';
import {recipes} from "./customjs/recipedata.js";
import RecipeList from "./RecipeList.jsx";
import Greeting from "./Greeting.jsx";

function App() {
    // let greetword = "Mulembe";
    // const Greet = useState("Oyaure");
    // const greet = Greet[0]; // responsible for reading the current value
    // const setGreet = Greet[1]; // setting new value
    const [greet, setGreet] = useState("Oyaure");


    function handleChange(event){
        setGreet(event.target.value);
    }


  return (
    <>
        <h1 className="text-center text-2xl mt-4 font-bold text-blue-500">Welcome to Recipe App</h1>

        <input className={"border-2 border-green-500"}
               value={greet}
               onChange={() => handleChange(event)}
               placeholder={"Enter your greeting way"}/>

        <Greeting word={greet}/>
        {/*<div className={"grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 gap-4 mx-20 mt-20"}>*/}
        {/*    <RecipeList recipes={recipes}/>*/}
        {/*</div>*/}
    </>
  )
}

export default App;
