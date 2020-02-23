window.addEventListener('load',getMeal)
let mealImg = document.getElementById('mealPhoto');
let mealTitel = document.getElementById("mealtit");
let instruc = document.getElementById("InstructionsPar")
let ingredDive = document.getElementById("ingredientsDiv")
let ingredList =document.getElementById("ingredient_list")

function getMeal(){
    let mealName =window.location.pathname;
    apiCall('GET',`/api${mealName}`,res=>{
       
       mealImg.src =res.meals[0].strMealThumb;
       mealTitel.innerHTML =res.meals[0].strMeal;
       mealImg.className = "meals__meals_img"
       instruc.innerHTML =res.meals[0].strInstructions;
       for(let i=1;i<20;i++){
        let liIngredient =document.createElement("li")
        let x =res.meals[0][`strMeasure${i}`]+"                 __"
        +  res.meals[0][`strIngredient${i}`]
        if(x.trim() !=="__"){
        liIngredient.innerHTML= x;
        ingredList.appendChild(liIngredient);}
    }

    })
}