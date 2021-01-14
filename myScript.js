// Just check to see that we found the div element we are looking for
myDiv = document.getElementById("myDiv");
console.log(myDiv);

var maleTitles = Array("Archduke","Ashwapati","Ausburger and Pfahlburger","Awang","Baron","Chhatrapati","Count","Darbar","Dewan Bahadur","Don","Duke","Earl","Emperor","EN","Esquire","Fils de France","First Gentleman","Gentleman","Goodman","Grand Burgher","Grand duke","Ilkhan","Inamdar","Swedish jarls","Kabiraj","Kaviraj","Khan","Kumar","Lord","Margrave","Marquess","Master","Mesne lord","Monseigneur","Monsieur","Noyan","Pandit","Prince","Prince du sang","Qanungoh Shaikh","Rai Sahib","Raj Bhushan","Raj Ratna","Rao Bahadur","Rao Saheb","Ritter","Sahib","Sardar Bahadur","Second Gentleman","Senapati","Senhor","Sidi","Sire","Son of Heaven","Title Badge","Vaidya","Viscount","Warrior");

var femaleTitles = Array("Archduchess","Ashi","Baroness","Baugrygr","Begum","Countess","Dame","Dayang","Empress","First Lady","Fräulein","Gentlewoman","Goodwife","Grand Burgher","Grand duchess","Her Honour","Khanum","Khatun","Lady Mayoress","Lalla","Mademoiselle","Mamsell","Mistress","NIN","Queen regnant","Second lady","Shrimati");

var nonBinTitles = Array("Mx","M","Misc","Msr","Mq","Ind","Tiz","Mirdam","Mistdam","Sir’ram","Laddam","Mir","Monarch","Ruler","Sovereign","Quing","Caln","Prin","Prinxe","Princet","Princette","Princev","Princen","Princus","Heir","Princex","Lairde","Layde","Liege","Suzerain","Potentate","Khal","Khaleesi","Khalsine","Khalse","Khalof");

var foods = Array("Beets", "Mint Chip", "Pomegranate", "Brie De Meaux", "Pilaf", "Hazelnut MacChiato", "Clam Chowder", "Thai Green Curry", "Watercress Sandwich", "Flan", "Raspberry Lemon Meringue Pie", "Baked Potato Soup", "Oysters Rockefeller", "Sticky Toffee Pudding", "Chicken Fried Steak", "Bagel and Lox", "Cactus Fries", "Hibiscus Tea", "Pomelo", "Jumbalaya", "Pho", "Fettucini Alfredo", "Spaghetti Squash", "Frittata", "Masala Dosa", "Profiteroles", "Escargots", "Zucchini Flowers", "Arugula Blackberry Salad", "Carbonara", "Chia Pudding", "Mango Lassi", "Acai");


// Click event to attach to button
function myClick () {
  // Quick check to verify that the function executes.
  console.log("test function");
  // Get the values that were input into the two text boxes.
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var pronouns = document.getElementById('pronouns').value;
  var cool = document.getElementById('cool').value;
  console.log(fname, lname, pronouns);

  myJSON = {
    'fname': fname,
    'lname': lname,
    'pronouns': pronouns,
    'cool': cool,
  }
  var validPronoun = false;
  if ((myJSON["pronouns"] == "he/him/his") || (myJSON["pronouns"] == "He/him/his")){
    var title = maleTitles[Math.floor(Math.random() * maleTitles.length)];
    validPronoun = true;
  }
  if ((myJSON["pronouns"] == "she/her/hers") || (myJSON["pronouns"] == "She/her/hers")){
    var title = femaleTitles[Math.floor(Math.random() * femaleTitles.length)];
    validPronoun = true;
  }
  if ((myJSON["pronouns"] == "they/them/theirs") || (myJSON["pronouns"] == "They/them/theirs")){
    var title = nonBinTitles[Math.floor(Math.random() * nonBinTitles.length)];
    validPronoun = true;
  }
  if (validPronoun != true){
    var title = "Smarty Pants Non-Conforming Pronoun Human"
  }

  if (cool.checked){
    var cool = "The Coolest Around"
  }

  if (!cool.checked){
    var cool = "Not the Coolest, yet Still Amazingly Awesome"
  }

  var food = foods[Math.floor(Math.random() * foods.length)];
  // By using = we *replace* the entire contents of the div tag.
  myDiv.innerHTML = "\n";
  myDiv.innerHTML = "\t\t<h1>Here's your new, spectacular funky dunky name!</hl>\n";
  // Notice mixing of quotation marks, just like in Python.
  myDiv.innerHTML += "\t\t<h2>" + " [" + title + "] " + myJSON["fname"] + " [" + food + "] " + myJSON["lname"] + "</h2> \n";
  myDiv.innerHTML += "\t\t<p> [" + cool + "]</p> \n";
}
