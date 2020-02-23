

function createCateg(item) {
    
    let categDiv = document.createElement("div");
    let link =document.createElement("a");
    let categImg = document.createElement("img");
    let categName =document.createElement("h3");
    link.setAttribute('href',`${item.strCategory}`);
    link.addEventListener('click',getMealsCateg)
    categDiv.appendChild(link)
    link.appendChild(categImg);
    categDiv.appendChild(categName);
    
    categImg.src= item.strCategoryThumb;
    categName.innerHTML=item.strCategory;
    categImg.className = "categories_div__img"
    categDiv.className = "categories_div__item"
    return categDiv;
}
 function getCategories() {
     apiCall("GET",'/categories',res =>{
         res.categories.forEach(category => {
         let cont = document.getElementById("contener");
         cont.appendChild(createCateg(category))
         cont.className = "categories_div"
           });
       });
                        
    }
function createMeals(item){
    let mealDiv = document.createElement("div");
    let link =document.createElement("a");
    let mealImg = document.createElement("img");
    let mealName =document.createElement("h3");
    link.setAttribute('href',`/meals/${item.strMeal}`);
    
    link.appendChild(mealImg)
    mealDiv.appendChild(link)
    mealDiv.appendChild(mealName);
    mealImg.className = "categories_div__img";
    mealDiv.className = "categories_div__item"
    mealImg.src= item.strMealThumb;
    mealName.innerHTML=item.strMeal;
    return mealDiv;
}

function getMealsCateg(e) {
    e.preventDefault();
    let categoryName= e.target.parentNode.pathname;
    apiCall("GET",`/categories${categoryName}`,res=>{
        res.meals.forEach(meals=>{
            let mealscont=document.getElementById("mealsContener")
            mealscont.appendChild(createMeals(meals))
            mealscont.className = "categories_div"
        })
    })
}


window.addEventListener('load',()=>{
    getCategories();
});
