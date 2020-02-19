const xhr = new XMLHttpRequest();
const search =document.getElementById("searchButton");
let resu =document.getElementById("result")
let img =document.getElementById("resultImg")
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

window.addEventListener('click',(event)=>{
    event.preventDefault();
    apiCall('/food',(res)=>{
        console.log(res);
        resu.innerHTML= res.meals[0].strMeal;
        img.src=res.meals[0].strMealThumb;
        
    })
})