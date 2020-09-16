/* The below code Displays the user entries with name,barcode and membertype*/
const urlParams = new URLSearchParams(window.location.search);
var user_id = urlParams.get('user_id');
const makeAPIQuery = function(user_id) {

	let rootURL = "http://127.0.0.1:3000/users/" + user_id;
	let xhttp = new XMLHttpRequest();

	xhttp.addEventListener("load", processResponse);

	xhttp.open("GET", rootURL);

	xhttp.send();
};

const processResponse = function() {

	let response = JSON.parse(this.response);
	let outputDiv = document.getElementById("output");
	let userIdInput = document.getElementById("user_id");
	userIdInput.value = response.id


	var textContent = response.name
	var textContent1 = response.memberType
	var textContent2=response.barcode

	outputDiv.insertAdjacentHTML('beforeend', textContent);
	outputDiv.insertAdjacentHTML('beforeend', textContent1);
	outputDiv.insertAdjacentHTML('beforeend', textContent2);
};
		

makeAPIQuery(user_id);
