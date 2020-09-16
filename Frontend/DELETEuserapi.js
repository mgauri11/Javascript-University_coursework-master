/*This part gets the users*/
const makeAPIQuery3 = function() {

    let rootURL = "http://127.0.0.1:3000/users";

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
    let outputDiv = document.getElementById("output3");
    for (var key in response) {
        if (!response.hasOwnProperty(key)) continue;

            var obj = response[key];
            for (var prop in obj) {

                    
                if(!obj.hasOwnProperty(prop)) continue;

                console.log(prop + " = " + obj[prop]);
                    
                    
            }  
               
    }
            
};
/*This part of code deletes the existing fields like name,barcode membertype through the user id,the entry can
be deleted with the button as well but just for a smooth user experience I have given form for library person 
who can read the entry from top of the page,accordingly enter into the form and click the delete button 
and refresh the page to see the entry is removed and go back to the previous page and again refresh it and see the 
entry is removed from there as well*/ 
    
let createDeleteButton = document.getElementById("create_delete_button");
createDeleteButton.addEventListener("click", function() {


    let user_id = document.getElementById("user_id").value;
    console.log(user_id)
    let delete_user_name = document.getElementById("delete_user_name").value;
    let delete_user_number = document.getElementById("delete_user_barcode").value;
    let delete_user_member_type = document.getElementById("delete_user_member_type").value;

    console.log(delete_user_name)
    console.log(delete_user_number)
    console.log(delete_user_member_type)

    delete_user(user_id, delete_user_name, delete_user_number, delete_user_member_type)
            
});


const delete_user = function(user_id, delete_user_name,delete_user_number, delete_user_member_type) {
    

    var base_url="http://127.0.0.1:3000";

    var user_url = base_url+"/users/" + user_id;


    var xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", user_url);

          
        
    xhttp.setRequestHeader('Content-Type', 'application/json')
            

    var params = {
        name:delete_user_name,
        barcode:delete_user_number,
        memberType:delete_user_member_type                
                
    };

            
    xhttp.send(JSON.stringify(params));
            


};

        

       
        