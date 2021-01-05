myDiv = document.getElementById("myDiv");
console.log(myDiv);
function myClick () {
  console.log("test function");
  myDiv.innerHTML = "\n\t\t";
  myDiv.innerHTML += "<img src='default.png' />\n";
}
