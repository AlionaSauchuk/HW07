function sendRequest() {
    var itemId = sessionStorage.getItem('idDelete');

    var oHandler = o('http://localhost:3000/data').find( itemId ).delete();
    oHandler.save();
};


(function(){
    var itemId = sessionStorage.getItem('idDelete');
    document.getElementById("id").value = itemId;
})()