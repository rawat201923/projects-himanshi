const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector(`.searchBtn`);
const recipeContainer = document.querySelector(`.recipe-container`);
//pop variables
const recipeDeatilsContent = document.querySelector(`.recipe-details-content`);
const recipeCloseBtn = document.querySelector(`.recipe-close-btn`);


const fetchRecipes = async(query) => {
    recipeContainer.innerHTML = `<h2>Fetching Recipes.....</h2>`;
    try{
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();
    console.log(response);

    recipeContainer.innerHTML = ``;
    response.meals.forEach(meal =>{
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML=`<img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strArea} <span> Dish</span></p>
        <p>Belongs to ${meal.strCategory}<span> Category</span></p>
        `
        const button = document.createElement('button');
        button.textContent = "View Recipe";
        recipeDiv.appendChild(button);

        // add addEventListeneron button
        button.addEventListener("click", ()=>{
            openRecipePopup(meal);



        });

        recipeContainer.appendChild(recipeDiv);

    });

    }catch(error){
        recipeContainer.innerHTML= `<h2>Error Fetching Data......Try Again Later! </h2>`;
    }
    

}

// function to fetch ingredients and measurements
const fetchIngredients = (meal) => {
    let ingredientsList = "";
    for(let i=1; i<=20; i++){
        const ingredient =meal[`strIngredient${i}`];
        if(ingredient){
            const measure = meal[`strMeasure${i}`];
            ingredientsList +=  `<li>${measure} ${ingredient} </li>`
         }else{
            break;
         } 
    }
    return ingredientsList; 
}

const  openRecipePopup = (meal)=>{
    recipeDeatilsContent.innerHTML =`
    <h2 class="recipeName">${meal.strMeal}</h2>
    <h3>Ingredients:</h3>
    <ul class="ingredientList">${fetchIngredients(meal)}</ul>
    <div class="instructions">
        <h3>Intruction:</h3>
        <p >${meal.strInstructions}</p>
    </div>
        
       `
    
        recipeDeatilsContent.parentElement.style.display = "block";

    }  

recipeCloseBtn.addEventListener( `click`, () => {
       recipeDeatilsContent.parentElement.style.display="none";
 });
searchBtn.addEventListener( `click`, (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    if(!searchInput){
        recipeContainer.innerHTML = `<h2>Type the meal in the search box</h2>`;
        return;
    }
    fetchRecipes(searchInput);//function call
});


