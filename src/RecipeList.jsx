/**
 * @component is RecipeList
 * @truncateDescription is used to truncate the description text if its length is > 20
 * @toggleMore enables toggle of the text
 *
 *
 * Am using dataset utility
 * Learn more here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
 * */

function RecipeList(props){
    const {recipes} = props;

    function truncateDescription(description, limit=20){
        let word_array = description.split(' ');

        // if the description text is greater that limit value, trim it.
        if(word_array.length > limit){
            word_array = word_array.slice(0, limit).join(' ')+ "....";
            return word_array;
        }

        // Else just return it as it is, because its less than limit
        return description;
    }

    function toggleMore(event, recipeId){
        event.preventDefault();

        let descriptionElement = document.getElementById(`description-${recipeId}`);
        let readMoreBtn = event.target; // Returns the whole target that this event is attached to, which the ReadMore button

        if(descriptionElement.dataset.expanded === 'false'){
            descriptionElement.dataset.expanded = 'true';
            readMoreBtn.textContent = 'Read Less';
            descriptionElement.textContent = descriptionElement.dataset.fullText;
        }else{
            descriptionElement.dataset.expanded = 'false';
            readMoreBtn.textContent = 'Read More';
            descriptionElement.textContent = truncateDescription(descriptionElement.dataset.fullText);
        }


    }


    return (
        <>
            {
                recipes.map((recipe) => (

                    <div
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img className="rounded-t-lg" src={recipe.image_path} alt={recipe.name}/>
                        <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{recipe.name}</h5>

                            <p data-expanded="false"
                               data-full-text={recipe.description}
                               id={"description-"+recipe.id}
                                className="mb-3 font-normal text-gray-700 dark:text-gray-400">{truncateDescription(recipe.description)}</p>
                            <a href="#"
                               onClick={() => toggleMore(event, recipe.id)}
                               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                ))
            }
        </>
    )
 }

 export default RecipeList;

 // export {RecipeList};