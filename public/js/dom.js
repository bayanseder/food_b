// const xhr = new XMLHttpRequest();

// let resu =document.getElementById("randomCon")
// let img =document.getElementById("resultImg")
// let resu1= document.getElementById("result1")
// let img1 = document.getElementById("resultImg1")


// let apiCall = (url, callback) => {
//     xhr.onreadystatechange = () => {
//         if (xhr.status === 200 && xhr.readyState === 4) {
//             const response = JSON.parse(xhr.responseText)
//             if (callback) {
//                 callback(response);
//             }
//         }
//     }
//     xhr.open('GET', url)
//     xhr.send();
// }




// apiCall("",(res)=>{

//     apiCall("",()=>{
        
//     })
// })

window.addEventListener('load',(event)=>{

    apiCall('GET','/api/random',(res)=>{  
        let randomContener =document.getElementById("randomCon")
    for(let i=0 ;i<4;i++){
        let resultDiv = document.createElement("div")
        let resultName =document.createElement("h3")
        let resultImg =document.createElement("img") 
        resultImg.className="categories_div__img";
        resultDiv.className="categories_div__item";
        resultDiv.appendChild(resultImg)
        resultDiv.appendChild(resultName)
        resultImg.src =res[i].meals[0].strMealThumb;
        resultName.innerHTML=res[i].meals[0].strMeal;
        randomContener.appendChild(resultDiv)
    };

        
    })
})

