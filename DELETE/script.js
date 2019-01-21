function sendRequest() {
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/data";
    var itemId = sessionStorage.getItem('idDelete');

    xhr.open("DELETE", url+'/'+itemId, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {        
        }
    };

    xhr.send();
};


(function(){
    var itemId = sessionStorage.getItem('idDelete');
    document.getElementById("id").value = itemId;
})()