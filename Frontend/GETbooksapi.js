const makeAPIQuery = function() {

    // let rootURL = "http://127.0.0.1:3000/books";
    let rootURL= "http://127.0.0.1:3000/books?allEntities=true";

    let xhttp = new XMLHttpRequest();

    xhttp.addEventListener("load", processResponse);

    xhttp.open("GET", rootURL);

    xhttp.send();
};

const processResponse = function() {


    let response = JSON.parse(this.response);
    console.log(this.response);
    let outputDiv = document.getElementById("input");
    let newList = createList(outputDiv);

    for (var key in response) {
        if (!response.hasOwnProperty(key)) continue;

            var obj = response[key];
            //var return_html = '<a href="trialapiauthordetail.html?book_id=' + obj['id'] + '">ID: ' + obj['id'] + ', Name: ' + obj['name'] '</a>'
            for (var prop in obj) {

                var authors = obj['Authors']
                var authorsName = '';

                for (key in authors) {
                    console.log('name', authors[key]['name']);
                    authorsName += authors[key]['name'] + '  ';
                    console.log(authorsName)
                }

                console.log(obj['Authors'])
                if(!obj.hasOwnProperty(prop)) continue;

                // console.log('1111', prop + " = " + obj[prop]);
                    
            }  
            var return_html = '<a href="trialapibooksdetail.html?book_id=' + obj['id'] + '">ID: ' + obj['id'] + ', Title: ' + obj['title'] + ',ISBN: ' + obj['isbn'] +',Authors: ' + authorsName  + '</a>';


            addListItem(newList, return_html);                
               
    }
            
};

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
//processResponse();
       
        