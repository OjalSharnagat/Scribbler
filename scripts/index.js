// JavaScript code to handle the modals and buttons
var modal1 = document.getElementById("signUpModal");
var modal2 = document.getElementById("signInModal");

var btn1 = document.getElementById("signUpBtn");
var btn2 = document.getElementById("signInBtn");

var span1 = document.getElementsByClassName("closeModal")[0];
var span2 = document.getElementsByClassName("closeModal")[1];

btn1.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
