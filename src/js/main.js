
const states = [
	"Alabama",
	"Alaska",
	"American Samoa",
	"Arizona",
	"Arkansas",
	"California",
	"Colorado",
	"Connecticut",
	"Delaware",
	"District Of Columbia",
	"Federated States Of Micronesia",
	"Florida",
	"Georgia",
	"Guam",
	"Hawaii",
	"Idaho",
	"Illinois",
	"Indiana",
	"Iowa",
	"Kansas",
	"Kentucky",
	"Louisiana",
	"Maine",
	"Marshall Islands",
	"Maryland",
	"Massachusetts",
	"Michigan",
	"Minnesota",
	"Mississippi",
	"Missouri",
	"Montana",
	"Nebraska",
	"Nevada",
	"New Hampshire",
	"New Jersey",
	"New Mexico",
	"New York",
	"North Carolina",
	"North Dakota",
	"Northern Mariana Islands",
	"Ohio",
	"Oklahoma",
	"Oregon",
	"Palau",
	"Pennsylvania",
	"Puerto Rico",
	"Rhode Island",
	"South Carolina",
	"South Dakota",
	"Tennessee",
	"Texas",
	"Utah",
	"Vermont",
	"Virgin Islands",
	"Virginia",
	"Washington",
	"West Virginia",
	"Wisconsin",
	"Wyoming"
]

let $state = document.querySelector(`[name="state"]`)
let $suggestions = document.querySelector(`.suggestions`)


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


searchCharacters = document.querySelectorAll()

states.filter(function(state){
	if (searchCharacters.value === states.includes) {
		return state
	} else {}
})

then input filed.value = "returned state"
and the other ones go away
// maybe with display none




//YOU HAVE TO USE WHAT YOU LEARN OR IT'S NOT USEFUL

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


