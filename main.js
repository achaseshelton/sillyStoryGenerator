const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertx = ["Willy the Goblin", "Big Daddy", "Father Christmas", "Thor", "Jon Snow", "Mickey Mouse"];
var inserty = ["the soup kitchen", "Disneyland", "the White house", "Highgarden", "Hell's Kitchen", "Hogwarts"];
var insertz = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away", "fell through a hole in the street"];

randomize.addEventListener('click', result);

function result() {
  var newStory = storyText;  //Sets the value variable newStory to equal the variable of storyText
  var xItem = randomValueFromArray(insertx);  //Sets the value of variable xItem to be a random item from the insertx array
  var yItem = randomValueFromArray(inserty);  //Sets the value of variable yitem to be a random item from the inserty array
  var zItem = randomValueFromArray(insertz);  //Sets the value of variable zitem to be a random item from the insertz array
  
  newStory = newStory.replace(":insertx:", xItem);  //Replaces the string ":insertx:" with the vaule of xItem in the newStory
  newStory = newStory.replace(":insertx:", xItem);  //Replaces the string ":insertx:" with the value of xitem in the newStory
  newStory = newStory.replace(":inserty:", yItem);  //Replaces the string ":inserty:" with the value of yItem in the newStory
  newStory = newStory.replace(":insertz:", zItem);  //Replaces the string ":insertz:" with the value of zItem in the newStory

  if(customName.value !== '') { //If the value of customName is not left blank
    let name = customName.value;  //Sets the value of variable name to the value of the custome name field
    newStory = newStory.replace("Bob", name)  //Replaces the string "Bob" with the value of name in the newStory

  };

  if(document.getElementById("uk").checked) {  //If the "uk" element is checked
    let weight = Math.round(300/14) + " stone";  //Sets the value of weight to be 300 divided by 14 plus the string " stone"
    let temperature =  Math.round((94-32) * 5 / 9) + " centigrade";  //Sets the value of temperature to be 94 - 32 then * 5 / 9 plus the string " centigrade"
    newStory = newStory.replace("300 pounds", weight);  //Replaces the string "300 pounds" with the value of variable weight in the newStory
    newStory = newStory.replace("94 fahrenheit", temperature);  //Replaces the string "94 fahrenheit" with the value of variable temperature in the newStory.
  };

  story.textContent = newStory;
  story.style.visibility = 'visible';
};