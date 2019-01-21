function sendRequest() {
    var formElements = document.getElementById("createForm").elements;
    var data = {};
    for (var i = 0; i < formElements.length; i++) {
        data[formElements[i].name] = formElements[i].value;
    }

    o('http://localhost:3000/data').post(data).save().then(function (result) {});
};