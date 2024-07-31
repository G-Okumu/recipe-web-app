 function RecipeList(props){
    const {recipes} = props;
    return (
        <>
            {
                recipes.map((recipe, index) => (
                    <div key={index}>
                        <h1>{recipe.name}</h1>

                        <h2>Instructions of the recipe</h2>
                        <div>
                            <ol>
                                {
                                    recipe.instructions.map((element, index) => (
                                        <li key={index}>{element}</li>
                                    ))
                                }
                            < /ol>

                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default RecipeList;

// export {RecipeList};