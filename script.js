
(function () {

    var data = JSON.stringify(false);
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://cors-anywhere.herokuapp.com/http://services.odata.org/V4/TripPinService/People");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        var el = document.getElementById("data");
        var json = JSON.parse(xhr.responseText);
        Array.from(json.value).forEach(element => {
            el.innerHTML += '<tr>' +
                '<td><button class="btn btn-dark" id="' + element.UserName + '" onclick="DataUpdate(this)">Update</button></td>' +
                '<td><button class="btn btn-dark" id="' + element.UserName + '" onclick="DataDelete(this)">Delete</button></td>' +
                '<td>' + element.UserName + '</td>' +
                '<td>' + element.FirstName + '</td>' +
                '<td>' + element.LastName + '</td>' +
                '<td>' + element.Gender + '</td></tr>';
        });

      }
    });
    xhr.send(data);
})();


function startUpdate(obj) {
    sessionStorage.setItem('idUpdate', obj.id);
    window.location.href = "http://127.0.0.1:5500/PUT/index.html";
}

function startDelete(obj) {

    sessionStorage.setItem('idDelete', obj.id);
    window.location.href = "http://127.0.0.1:5500/DELETE/index.html";

}