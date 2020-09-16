/*This part gets the book by title and isbn and then adds the author to particular book id from the list of authors*/

let addAuthorToBookForm = document.getElementById("add-author-to-book-form");
if ( addAuthorToBookForm ) {
    let submitBtn = document.getElementById("submit-btn");
    submitBtn.onclick = function(){
        let params = {
            name: document.getElementsByName("name")[0].value
        };

        var base_url="http://127.0.0.1:3000";

        const urlParams = new URLSearchParams(window.location.search);
        var book_id = urlParams.get('book_id');

        var url = base_url + '/books/' + book_id + '/authors';


        var xhttp = new XMLHttpRequest();
        xhttp.addEventListener("load", processResponse);
        xhttp.open("POST", url);
        xhttp.setRequestHeader('Content-Type', 'application/json')
        xhttp.send(JSON.stringify(params));

        
    }
}

/*The below functions adds authors to books*/
const addAuthorToBook =function(author_id, book_id) {
    var base_url="http://127.0.0.1:3000";

    var url = base_url + '/books/' + book_id + '/authors/' + author_id;

    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener("load", processResponse);
    xhttp.open("POST", url);
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send();

};

const makeAuthorsAPIQuery = function() {

    let rootURL = "http://127.0.0.1:3000/authors";
    

    let xhttp = new XMLHttpRequest();

    xhttp.addEventListener("load", processAuthorsResponse);

    xhttp.open("GET", rootURL);

    xhttp.send();
};
/*For the below function I have taken reference from the learning material and the sites like stackoverflow and w3school and
tweaked the code according to my requirement*/

/*this below function helps the library person to add one/more authors to particular book entry and display it 
after refreshing the page*/

const processAuthorsResponse = function() {


    let response = JSON.parse(this.response);
    let authorsList = document.getElementById("authors-list");
    let newList = createList(authorsList);

    for (var key in response) {
        if (!response.hasOwnProperty(key)) continue;

            var obj = response[key];
            var author_id = obj['id'];

            const urlParams = new URLSearchParams(window.location.search);
            var book_id = urlParams.get('book_id');

            var addButton = '<button onclick="addAuthorToBook(' + author_id + ', ' + book_id + ')">Add</button>'
            var return_html = 'Name: ' + obj['name'] + addButton;


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

makeAuthorsAPIQuery();
       
        