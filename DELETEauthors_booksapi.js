const makeAPIQuery3 = function() {

    let rootURL = "http://127.0.0.1:3000/books";

    let xhttp = new XMLHttpRequest();

    xhttp.addEventListener("load", processResponse);

    xhttp.open("GET", rootURL);

    xhttp.send();
};
/*For the below function I have taken reference from the learning material and the sites like stackoverflow and w3school and
tweaked the code according to my requirement*/
const processResponse3 = function() {

    
    let response = JSON.parse(this.response);
    console.log(this.response);
    let outputDiv = document.getElementById("input3");
    for (var key in response) {
        if (!response.hasOwnProperty(key)) continue;

            var obj = response[key];
            for (var prop in obj) {

                    
                if(!obj.hasOwnProperty(prop)) continue;

                console.log(prop + " = " + obj[prop]);
                    
                    
            }  
               
    }
            
};
/*This part of code deletes the existing fields like title,isbn,authors through the book id,the entry can
be deleted with the button as well but just for a smooth user experience I have given form for library person 
who can read the entry from top of the page,accordingly enter into the form and click the delete button 
and refresh the page to see the entry is removed and go back to the previous page and again refresh it and see the 
entry is removed from there as well*/ 
    
let createDeletebookButton = document.getElementById("delete_book_button");
createDeletebookButton.addEventListener("click", function() {


    let bookInfo = document.getElementById("book-info").value;
    console.log(book_id)
    let delete_user_name = document.getElementById("delete_book_title").value;
    let delete_user_number = document.getElementById("delete_book_isbn").value;
    

    console.log(delete_book_title)
    console.log(delete_book_isbn)
    

    delete_book(book_id, delete_book_title, delete_book_isbn)
            
});


const delete_book = function(book_id, delete_book_title,delete_book_isbn) {
    

    var base_url="http://127.0.0.1:3000";

    var book_url = base_url+"/books/" + book_id;


    var xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", book_url);

          
        
    xhttp.setRequestHeader('Content-Type', 'application/json')
            

    var params = {
        title:delete_book_title,
        isbn:delete_book_isbn
                       
                
    };

            
    xhttp.send(JSON.stringify(params));
            


};

        
       
        