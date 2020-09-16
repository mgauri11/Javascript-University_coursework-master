/*Displays the list of users on the page*/
const makeAPIQuery1 = function() {

    let rootURL = "http://127.0.0.1:3000/users";

    let xhttp = new XMLHttpRequest();

    xhttp.addEventListener("load", processResponse);

    xhttp.open("GET", rootURL);

    xhttp.send();
};

const processResponse2 = function() {

    
    let response = JSON.parse(this.response);
    console.log(this.response);
    let outputDiv = document.getElementById("output");
    for (var key in response) {
        if (!response.hasOwnProperty(key)) continue;

            var obj = response[key];
            for (var prop in obj) {

                    
                if(!obj.hasOwnProperty(prop)) continue;

                console.log(prop + " = " + obj[prop]);
                    
                    
            }  
               
    }
            
};

/*Adds the new user with accepted fields*/
    
let createUserButton = document.getElementById("create_user_button");
createUserButton.addEventListener("click", function() {


    let create_user_name = document.getElementById("create_user_name").value;
    let create_user_number = document.getElementById("create_user_number").value;
    let create_user_member_type = document.getElementById("create_user_member_type").value;

    console.log(create_user_name)
    console.log(create_user_number)
    console.log(create_user_member_type)

    create_user(create_user_name, create_user_number, create_user_member_type)
            
});

const create_user = function(create_user_name,create_user_number, create_user_member_type) {

    var base_url="http://127.0.0.1:3000";

    var user_2_url = base_url+"/users";


    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", user_2_url);

          
        
    xhttp.setRequestHeader('Content-Type', 'application/json')
            

    var params = {
        name:create_user_name,
        barcode:create_user_number,
        memberType:create_user_member_type                
                
    };

            
    xhttp.send(JSON.stringify(params));
            


};

        
//makeAPIQuery();
//processResponse2();
       
        