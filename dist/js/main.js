"use strict";

console.log("hello");

var states = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Columbia", "Federated States Of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

var state = document.querySelector("[name=\"state\"]");
var suggestions = document.querySelector(".suggestions");

state.addEventListener("keyup", function (e) {
	suggestions.innerHTML = '';
	var inputVal = e.currentTarget.value.toLowerCase();
	//if there isn't anything in the field, stop
	if (inputVal.length <= 0) {
		return;
	}
	//for each element in the array if it includes the value, create our button, if not do nothing
	states.forEach(function (item) {
		return item.toLowerCase().includes(inputVal) ? createButton(item) : null;
		//ternary statement
	});
});

// the function for making the strings into buttons
var createButton = function createButton(string) {
	var button = document.createElement('button');
	button.innerHTML = string;
	button.addEventListener("click", function (e) {
		e.preventDefault();
		state.value = string;
		suggestions.innerHTML = '';
	});
	//this adds the buttons to the dom
	suggestions.appendChild(button);
};

// check item.name and then turn the states into objects and give them names and flag img. Call it to put the flag in the click event


//What do I need to do?
//run a function for when letters begin to be typed out in the input text field. 
//read what letters are being typed and store them in a var
//if the letters typed are in an array item then populate the array item(s) below as a suggestion. 
//then if you click on the suggestion it changes the text field to contain that and the other options disappear
//save that as a string and cross check it with the array items
//alphabetize the options that come out?


//loop through the array for each item in that array 

//this is listening for the type event and running the program
// window.addEventListener("load", function() {
// 	$state.addEventListener("keyup", function(event) {
// 		states.forEach(function (element) {
// 			if (element.includes($state.value)){
// 				$suggestions.innerHTML +=  element; 
// 				}
// 				console.log(element);
// 		});
// 		console.log("test")	
// 	});	
// });


//this is making the strings match up by lower casing them
// var match = function (str) {
// 	str = str.toLowerCase();
// 	for (var i = 0; i < states.length; i++) {
// 		if (states[i].toLowerCase().startsWith(str)) {
// 			$state.append ('<div>' + states[i] + '</div>');
// 		}
// 	}
// }

// let applicableStates = states.filter(function(state){

// })	

//this is looping through the array and making each item a string


// states.filter(function(state){
// 	if (searchCharacters.value === states.includes) {
// 		return state
// 	} else {}
// })

// //one to make the list
// //one to show/hide the list
// //one to search through the list
// //one to make the selection

// //this is doing the autocomplete 
// var autocomplete = function (event){
//     var input = event.target;

//     if (input.value.length < 0 ) { 
//         return;
//     } else { 
// 		$state.innerHTML = "";

// 		response.forEach(function(item) {
// 		    var option = document.createElement('option');
// 		    option.value = item;

// 		    huge_list.appendChild(option);
// 		});
// 	}	
// }


// //this is listening for the type event and running the program
// window.addEventListener("load", function() {
// 	$state.addEventListener("keyup", function() {
// 		checkArray();
// 	});
// });


// //this is making the strings match up by lower casing them
// var match = function (str) {
// 	str = str.toLowerCase();
// 	for (var i = 0; i < states.length; i++) {
// 		if (states[i].toLowerCase().startsWith(str)) {
// 			$state.append ('<div>' + states[i] + '</div>');
// 		}
// 	}
// }

// var removeDiv = function ()
//another function
// var filterStates = function () {
// 	if (states.forEach === states.includes) {
// 		return $state
// 	} else {
// 		console.log(states.forEach)
// 	}
// }


// then input filed.value = "returned state"
// and the other ones go away
// maybe with display none


//Assignment
//Type in the state
//EXTRA make the state flag as the option or when you click them give them the flag. 
//

//keypress (key up and down)

//if the name has the letter included in it array.includes
//entered text is the value
//inner html
// they need to be able to be clicked on and if they are clicked on then it autopopulates in the text field

// if a is clicked on then change 
//make the others go away


// searchCharacters = document.querySelectorAll()

// states.filter(function(state){
// 	if (searchCharacters.value === states.includes) {
// 		return state
// 	} else {}
// })

// then input filed.value = "returned state"
// and the other ones go away
// maybe with display none


// # Advanced Programming - Field Suggestions

// ## 1. Assignment
// Make it so that when the user starts typing into the field `<input type="text" id="state" name="state">`, the site should
// "suggest" what state they might have started typing. 

// Suggested state names should be shown in the div `<div class="suggestions">`, and
// when the user clicks one, the suggestions should dissappear and the field should be filled with the state name that was clicked.

// Style it nicely.

// ## 2. Extra credit
// Make this into your own plugin. If I were doing this, I'd make it so that a developer could have the form there in the html, and just call some JS to apply an array of suggestions to a field. 

// Something like this:

//     // make the #suggestions field suggest states in the array
//     suggestify('#suggestions', ["Alabama", "Alaska", ...]);
//# sourceMappingURL=main.js.map
