
(function () {

    var oHandler = o('http://localhost:3000/data');
    oHandler.get(function(data) {
        var el = document.getElementById("data");
        Array.from(data).forEach(element => {
            el.innerHTML+='<tr><td><button id="'+element.id+'" onclick="startUpdate(this)">Update</button></td>'+
            '<td><button id="'+element.id+'" onclick="startDelete(this)">Delete</button></td><td>'+element.userId+'</td><td>'+element.id+'</td><td>'+element.title+'</td><td>'+element.body+'</td></tr>';
        });
    });
})();


function startUpdate(obj) {
    sessionStorage.setItem('idUpdate', obj.id);
    window.location.href = "http://127.0.0.1:5500/PUT/index.html";
}

function startDelete(obj) {

    sessionStorage.setItem('idDelete', obj.id);
    window.location.href = "http://127.0.0.1:5500/DELETE/index.html";

}