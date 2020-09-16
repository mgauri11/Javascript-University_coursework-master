/*This part gets the users*/
const makeAPIQuery2 = function() {

    let rootURL = "http://127.0.0.1:3000/users";

    let xhttp = new XMLHttpRequest();

    xhttp.addEventListener("load", processResponse);

    xhttp.open("GET", rootURL);

    xhttp.send();
};

/*For the below function I have taken reference from the learning material and the sites like stackoverflow and w3school and
tweaked the code according to my requirement*/


const processResponse1 = function() {

    
    let response = JSON.parse(this.response);
    console.log(this.response);
    let outputDiv = document.getElementById("output1");
    for (var key in response) {
        if (!response.hasOwnProperty(key)) continue;

            var obj = response[key];
            for (var prop in obj) {

                    
                if(!obj.hasOwnProperty(prop)) continue;

                console.log(prop + " = " + obj[prop]);
                    
                    
            }  
               
    }
            
};
/*This part of code updates the existing fields like name and membertype through the user id*/
/*This part of code updates the existing fields like name and membertype through the user id,the entry can
be updated with the  given form for library person who can update the entry to his/her wish and then
refresh the page to see the entry is updated and go back to the previous page and again refresh it and see the 
entry is updated there as well*/  

let createUpdateButton = document.getElementById("create_update_button");
createUpdateButton.addEventListener("click", function() {


    let user_id = document.getElementById("user_id").value;
    console.log(user_id)
    let update_user_name = document.getElementById("update_user_name").value;
    let update_user_member_type = document.getElementById("update_user_member_type").value;

    console.log(update_user_name)
    console.log(update_user_member_type)

    update_user(user_id, update_user_name, update_user_member_type)
            
});


const update_user = function(user_id, update_user_name,update_user_member_type) {
    

    var base_url="http://127.0.0.1:3000";

    var user_url = base_url+"/users/" + user_id;


    var xhttp = new XMLHttpRequest();

    xhttp.open("PUT", user_url);

          
        
    xhttp.setRequestHeader('Content-Type', 'application/json')
            

    var params = {
        name:update_user_name,
        memberType:update_user_member_type                
                
    };

            
    xhttp.send(JSON.stringify(params));
            


};

        

       
        