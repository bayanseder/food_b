

window.addEventListener('load',(event)=>{

    apiCall('GET','/api/random',(res)=>{  
        let randomContener =document.getElementById("randomCon")
    for(let i=0 ;i<4;i++){
        let resultDiv = document.createElement("div")
        let resultName =document.createElement("h3")
        let resultImg =document.createElement("img") 
        let link =document.createElement("a");
        link.appendChild(resultImg)
        link.setAttribute('href',`/meals/${res[i].meals[0].strMeal}`);
        resultImg.className="categories_div__img";
        resultDiv.className="categories_div__item";
        resultDiv.appendChild(link)
        resultDiv.appendChild(resultName)
        resultImg.src =res[i].meals[0].strMealThumb;
        resultName.innerHTML=res[i].meals[0].strMeal;
        randomContener.appendChild(resultDiv)
    };

        
    })
    
})

const searchBtn = document.getElementById("searchButton")
searchBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const mealSearch=document.getElementById("mealSearch").value;
    console.log('meal',mealSearch)
    apiCall('GET',`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealSearch}`,(res)=>{
       res.meals.forEach(meals => {
           
           let searchResultSection = document.getElementById("searchResult")
           let searchResultDiv=document.createElement("div");
           let searchResultImg=document.createElement("img");
           let searchResultName=document.createElement("h3");
           let searchResultLink=document.createElement("a");
           searchResultLink.appendChild(searchResultImg);
           searchResultDiv.appendChild(searchResultLink);
           searchResultDiv.appendChild(searchResultName);
           searchResultLink.setAttribute('href',`/meals/${meals.strMeal}`);
           searchResultImg.src=meals.strMealThumb;
           searchResultName.innerHTML=meals.strMeal;
           searchResultImg.className="categories_div__img";
           searchResultDiv.className="categories_div__item";
           searchResultSection.appendChild(searchResultDiv);
           searchResultSection.className="categories_div";
        });
    })

})