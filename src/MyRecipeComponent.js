import check from './check.png';

function MyRecipeComponent({ caloriesProps, image, nameProps, ingredients}) {
    return(
        <div className="container">
            <h2>{nameProps}</h2>
            <img src={image} alt="image_main" />
            <h3>Calories: {caloriesProps.toFixed()}</h3>
            <ul>
                {ingredients.map(ingredient => (
                    <li><img src={check} className="icon" alt="icons"/>{ingredient}</li>
                ))};
            </ul>
        </div>
    );
}

export default MyRecipeComponent;