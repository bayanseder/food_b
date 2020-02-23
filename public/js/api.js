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