function sendRequest() {
    var formElements=document.getElementById("updateForm").elements;    
    var data={};
    for (var i=0; i<formElements.length; i++){
        data[formElements[i].name]=formElements[i].value;
    }

    
    var oHandler = o('http://localhost:3000/data').find( data.id ).patch(data);
    oHandler.save();

};


(function(){
    var itemId = sessionStorage.getItem('idUpdate');
    document.getElementById("id").value = itemId;

})();