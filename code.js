//A4
// Declaring variables

var userChoice; // whether the user wants to continue playing
var numAmt; // the amount of numbers the user wants to input
var array = []; // the array we'll use to store the numbers
var smallest; // holds the smallest number in the array
var counter =0; // keeps count
var number; // used to test against the smallest value
var smallestCount; // repitition count of the smallest number

// program runs while the user not type 'no' to the final question.

do {
	// asks how many numbers the user will input, and checks whether answers are valid.
	numAmt = prompt("How many numbers would you like to input?");
	if (numAmt == 0){
		alert("You cannot enter zero numbers: please try again.")
	}
	else if (numAmt <0){
		alert("You cannot enter a negative amount of numbers: please try again.")
	}
	else {
		// if valid, each value is pushed into the array. If the user just presses return, that input is
		// read as zero.
		do {
		userInput = prompt("Please enter a number:");

		if (userInput.length == 0){
			userInput=0;
		}
	
		array.push(userInput);
		numAmt--;
	} while(numAmt >0);

	// sorts the array, in order to find the smallest value.
	var sorted = array.slice().sort(function(a,b){
		return a - b;
	});
	
	// the smallest value will now be at the first point in the array, and this is printed. then the
	// counter function is called.
	smallest = sorted[0];
	//alert("The smallest number is: " + smallest);
	smallestCount = repititionCount(array,smallest);

	// has a printing option for multiple times and just one time, for gramatical correctness.
	if (smallestCount == 1){
		alert("The smallest number is: " +smallest +". It is repeated " + smallestCount + " time.")
	}
	else {
		alert("The smallest number is: " +smallest +". It is repeated " + smallestCount + " times.");
	}
}
	// asks if the user would like to run the program again, if no, the program ends.
	userChoice= prompt("Would you like to run the program again? Please type yes/no:")
	
} while(userChoice != "no");


// function used to count the times the smallest value is found in the array.
function repititionCount(array, smallest) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == smallest) {
            counter++;
        }
    }
    return counter;
}


