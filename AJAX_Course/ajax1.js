document.getElementById('button').addEventListener('click', loadText);
function loadText(){
    var xhr = new XMLHttpRequest();
    //console.log(xhr);
    xhr.open('GET', 'sample.txt', true);
    xhr.onload = responseLoaded;
    //xhr.onreadystatechange = readyStateChenged;
    //xhr.onprogress = onProgress;//Optional: used for loaders
    xhr.onerror = onError;
    xhr.send();
}
function responseLoaded() {
    let div = document.getElementById('text');
    if(this.status == 200) {
        //console.log(this.responseText);
        div.innerHTML = this.responseText;
    } else if (this.status == 404) {
        div.innerHTML = 'Not found';
    }
}
/* function readyStateChenged() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
} */
/* function onProgress() {
    console.log(this.readyState);
} */
function onError() {
    console.log('Request error');
}