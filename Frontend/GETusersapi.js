/*This part gets the users*/

const makeAPIQuery = function() {

    let rootURL = "http://127.0.0.1:3000/users";

    let xhttp = new XMLHttpRequest();

    xhttp.addEventListener("load", processResponse);

    xhttp.open("GET", rootURL);

    xhttp.send();
};
/*For the below function I have taken reference from the learning material and the sites like stackoverflow and w3school and
tweaked the code according to my requirement.I have created a separate page which is created through the users
displayed from the GET request and then after going to that particular page through user entry its easy to update or delete it.*/

const processResponse = function() {


    let response = JSON.parse(this.response);
    console.log(this.response);
    let outputDiv = document.getElementById("output");
    let newList = createList(outputDiv);

    for (var key in response) {
        if (!response.hasOwnProperty(key)) continue;

            var obj = response[key];
            var return_html = '<a href="trialapiuserdetail.html?user_id=' + obj['id'] + '">ID: ' + obj['id'] + ', Name: ' + obj['name'] + ',Barcode: ' + obj['barcode'] + ', Member Type: ' + obj['memberType'] + '</a>'
            addListItem(newList, return_html);                
            for (var prop in obj) {

                console.log(obj[prop])
                if(!obj.hasOwnProperty(prop)) continue;

                console.log('1111', prop + " = " + obj[prop]);
                    
            }  
               
    }
            
};

/*The below code Returns list of user entries as links on the trialapiuserdetail.html page*/

const createList = function(parentElement) {
    let newList = document.createElement("ul");
    parentElement.appendChild(newList);
    return newList;
};

const addListItem = function(parentList, textContent) {
    let newItem = document.createElement("li");
    newItem.insertAdjacentHTML('beforeend', textContent);
    parentList.appendChild(newItem);
};

makeAPIQuery();

       
        