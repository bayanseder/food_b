
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

