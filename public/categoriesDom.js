const xhr = new XMLHttpRequest();
let apiCall = (method, url, callback) => {
    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText);
            if(typeof callback==='function'){
            
                callback(response);
            }
        }else {
            console.log('Error:',xhr.status,'|',xhr.readyState,)
        }
    }
    xhr.open(method, url)
    xhr.send();
}

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
    let mealImg = document.createElement("img");
    let mealName =document.createElement("h3");
    mealDiv.appendChild(mealImg)
    mealDiv.appendChild(mealName);
    mealImg.className = "categories_div__img";
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
        })
    })
}


window.addEventListener('load',()=>{
    getCategories();
});
