// Just check to see that we found the div element we are looking for
myDiv = document.getElementById("myDiv");
console.log(myDiv);

var maleTitles = Array("Archduke","Ashwapati","Ausburger and Pfahlburger","Awang","Baron","Chhatrapati","Count","Darbar","Dewan Bahadur","Don","Duke","Earl","Emperor", "Esquire","Fils de France","First Gentleman","Gentleman","Goodman","Grand Burgher","Grand duke","Ilkhan","Inamdar","Swedish jarls","Kabiraj","Kaviraj","Khan","Kumar","Lord","Margrave","Marquess","Master","Mesne lord","Monseigneur","Monsieur","Noyan","Pandit","Prince","Prince du sang","Qanungoh Shaikh","Rai Sahib","Raj Bhushan","Raj Ratna","Rao Bahadur","Rao Saheb","Ritter","Sahib","Sardar Bahadur","Second Gentleman","Senapati","Senhor","Sidi","Sire","Son of Heaven","Title Badge","Vaidya","Viscount","Warrior");

var femaleTitles = Array("Archduchess","Ashi","Baroness","Baugrygr","Begum","Countess","Dame","Dayang","Empress","First Lady","Fräulein","Gentlewoman","Goodwife","Grand Burgher","Grand duchess","Her Honour","Khanum","Khatun","Lady Mayoress","Lalla","Mademoiselle","Mamsell","Mistress","NIN","Queen regnant","Second lady","Shrimati");

var nonBinTitles = Array("Mx","M","Misc","Msr","Mq","Ind","Tiz","Mirdam","Mistdam","Sir’ram","Laddam","Mir","Monarch","Ruler","Sovereign","Quing","Caln","Prin","Prinxe","Princet","Princette","Princev","Princen","Princus","Heir","Princex","Lairde","Layde","Liege","Suzerain","Potentate","Khal","Khaleesi","Khalsine","Khalse","Khalof");

var foods = Array("Beets", "Mint Chip", "Pomegranate", "Brie De Meaux", "Pilaf", "Hazelnut MacChiato", "Clam Chowder", "Thai Green Curry", "Watercress Sandwich", "Flan", "Raspberry Lemon Meringue Pie", "Baked Potato Soup", "Oysters Rockefeller", "Sticky Toffee Pudding", "Chicken Fried Steak", "Bagel and Lox", "Cactus Fries", "Hibiscus Tea", "Pomelo", "Jumbalaya", "Pho", "Fettucini Alfredo", "Spaghetti Squash", "Frittata", "Masala Dosa", "Profiteroles", "Escargots", "Zucchini Flowers", "Arugula Blackberry Salad", "Carbonara", "Chia Pudding", "Mango Lassi", "Acai");

var activities = Array("Go to the park", "Watch the sunset at our local beaches", "Pack a picnic lunch", "Play board games", "Play card games", "Have a campfire in your backyard", "Get ice cream", "Go to the Zoo", "Look through old photographs", "Go to a beach cleanup", "Go to the farmer's market", "Pick strawberries in Carlsbad", "Pick apples in an orchard", "Pick blueberries on bushes", "Bake a pie", "Volunteer at a Soup Kitchen", "Volunteer at a Homeless shelter", "Go to the library", "Solve a puzzle", "Watch shooting stars", "Take a bike ride", "Go bowling", "Plant a garden", "Have a dance party in your bedroom")
// Click event to attach to button
function myClick () {
  // Quick check to verify that the function executes.
  console.log("test function");
  // Get the values that were input into the two text boxes.
  var favcolor = document.getElementById('favcolor').value;
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var pronouns = document.getElementById('pronouns').value;
  var cool = document.getElementById('cool').value;

  var food = foods[Math.floor(Math.random() * foods.length)];
  var activity = activities[Math.floor(Math.random() * activities.length)];
  myJSON = {
    'fname': fname,
    'lname': lname,
    'pronouns': pronouns,
    'cool': cool,
    'favcolor': favcolor,
    'food': food,
  }

  oldJSON = JSON.parse(localStorage.getItem("myJSON"));
  localStorage.setItem("myJSON", JSON.stringify(myJSON));
  // console.log(JSON.parse(JSON.stringify(myJSON)));
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

  if (myJSON['cool'].checked){
    var cool = "The Coolest Person Around!"
  }

  if (!myJSON['cool'].checked){
    var cool = "You, yes you, hehe!! You Are Amazingly Awesome, don't beat yourself up over it :) "
  }
  // By using = we *replace* the entire contents of the div tag.
  myDiv.innerHTML = "\n";
  myDiv.innerHTML = "\t\t<h2>Here's your new, spectacular funky dunky name!</hl>\n";
  // Notice mixing of quotation marks, just like in Python.
  myDiv.innerHTML += "\t\t<h4 id='coloredText'>" + " [" + title + "] " + myJSON["fname"] + " " + myJSON["lname"] + "</h2> \n";
  myDiv.innerHTML += "\t\t<p>Oh, and look at how pretty your favorite color looks!</p>\n";
  if (myJSON["favcolor"] == "#ffffff"){
    myDiv.innerHTML += "\t\t<p>Speaking of which, it seems...your favorite color is white? Guess you can't see what I've just printed there then.. Huh! You always foil my plans! Grr.. </p> \n";
    myDiv.innerHTML += "\t\t<p> Hmph, well this is what I was GOING to say..</p> \n";
    myDiv.innerHTML += "\t\t<h4>" + " [" + title + "] " + myJSON["fname"] + " " + myJSON["lname"] + "</h2> \n";
  }
  myDiv.innerHTML += "\t\t<p> Fancy a fun food? You should try this today: " + myJSON["food"] + "</p> \n";
  myDiv.innerHTML += "\t\t<p> " + cool + "</p> \n";
  myDiv.innerHTML += "\t\t<p> Soo, seeing you're taking a part in the glorious Create-O-Nator, you *must* be bored regardless of whether you want to admit it or not! \n Hmm.. Oh I know, maybe you could try to.. " + activity + "!</p> \n";

  document.getElementById('coloredText').style.color = myJSON["favcolor"];
}
