const xhr = new XMLHttpRequest();
let randomContener =document.getElementById("randomCon")

// let resu =document.getElementById("result")
// let img =document.getElementById("resultImg")
// let resu1= document.getElementById("result1")
// let img1 = document.getElementById("resultImg1")


let apiCall = (url, callback) => {
    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)
            if (callback) {
                callback(response);
            }
        }
    }
    xhr.open('GET', url)
    xhr.send();
}




apiCall("",(res)=>{

    apiCall("",()=>{
        
    })
})

// window.addEventListener('load',(event)=>{

//     apiCall('/food',(res)=>{  
//     res.forEach(element => {
//         let resultDiv = document.createElement("div")
//         let resultName =document.createElement("h3")
//         let resultImg =document.createElement("img") 
        
//         resultDiv.appendChild(resultImg)
//         resultDiv.appendChild(resultName)
        
//         resultImg.src = res.imgsrc;
//         resultName.innerHTML=res.strMeal;
//         randomContener.appendChild(resultDiv)
//     });

        
//     })
// })

