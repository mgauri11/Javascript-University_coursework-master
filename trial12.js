//I have taken this javascript from link:-https://www.w3schools.com/w3css/w3css_slideshow.asp

var myIndex = 0;
carousel();

function carousel() {


  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {


   	x[i].style.display = "none";  

 	}
 	myIndex++;
  if (myIndex > x.length) {myIndex = 1} 

  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
  		
}