myDiv = document.getElementById("myDiv");
console.log(myDiv);
function myClick () {
  console.log("test function");
  myDiv.innerHTML = "\n";
  myDiv.innerHTML = "\t\t<h1>Whoa.</h1>\n"
  myDiv.innerHTML += "\t\t<img src='default.png' />\n";
}
