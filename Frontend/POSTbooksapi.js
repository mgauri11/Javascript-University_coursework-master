/*Displays the list of books on the page*/
const makeAPIQuery12 = function() {

    
    let rootURL= "http://127.0.0.1/books?allEntities=true";

    let xhttp = new XMLHttpRequest();

    xhttp.addEventListener("load", processResponse);

    xhttp.open("GET", rootURL);

    xhttp.send();
};

/*For the below function I have taken reference from the learning material and the sites like stackoverflow and w3school and
tweaked the code according to my requirement*/

const processResponse22 = function() {

    
    let response = JSON.parse(this.response);
    console.log(this.response);
    let outputDiv = document.getElementById("input");
    for (var key in response) {
        if (!response.hasOwnProperty(key)) continue;

            var obj = response[key];
            for (var prop in obj) {

                    
                if(!obj.hasOwnProperty(prop)) continue;

                console.log(prop + " = " + obj[prop]);
                    
                    
            }  
               
    }
            
};

/*Adds the new book with accepted fields*/
    
let createBookButton = document.getElementById("create_book_button");
createBookButton.addEventListener("click", function() {


    let create_book_title = document.getElementById("create_book_title").value;
    let create_book_isbn = document.getElementById("create_book_isbn").value;


    console.log(create_book_title)
    console.log(create_book_isbn)
    

    create_book(create_book_title,create_book_isbn)
            
});

const create_book = function(create_book_title,create_book_isbn) {

    var base_url="http://127.0.0.1:3000";

    var book_4_url = base_url+"/books";


    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", book_4_url);

          
        
    xhttp.setRequestHeader('Content-Type', 'application/json')
            

    var params = {
        title:create_book_title,
        isbn:create_book_isbn
                      
                
    };

            
    xhttp.send(JSON.stringify(params));
            


};

        
//makeAPIQuery();
//processResponse22();
       
        