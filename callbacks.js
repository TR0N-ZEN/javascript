function loadAsset(url, type, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;
    xhr.onload = function() { //xhr.onload is called if the XHR was answered and the answer arrived at the client executing this scipt
    callback(xhr.response); //calling the the function which is thrird argument
    };
    xhr.send();
}
  
function displayImage(blob) {
    let objectURL = URL.createObjectURL(blob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
}
  
  loadAsset('coffee.jpg', 'blob', displayImage);