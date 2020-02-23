let search = document.getElementById("searchButton")
let searchSection = document.getElementById("searchResult")


search.addEventListener('click',(event)=>{
    event.preventDefault()
    console.log("doom")
    apiCall('GET','/food',(res)=>{
        console.log(res)
        res.forEach(element => {
          let resultDiv = document.createElement("div")
          let resultName =document.createElement("h3")
           let resultImg =document.createElement("img") 

           resultImg.src = res.imgsrc;
           resultName.innerHTML=res.strMeal;
           resultImg.className = "categories_div__img"
           resultDiv.className = "categories_div__item"
           resultDiv.appendChild(resultImg)
           resultDiv.appendChild(resultName)

          
           searchSection.appendChild(resultDiv)
        });
    })
  })