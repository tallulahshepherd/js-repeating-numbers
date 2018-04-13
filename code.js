
//b4
// function to get the number of digits in the given number
function numberOfDigits(number){
	return number.toString().length;
}

// loop continues as long as user does not enter 'no' to the final question
do {
	// variables declared here, so they refresh in each loop
	var userInput; 
	var array = []; // empty array for storing each digit of the number
	var counterArray = [0,0,0,0,0,0,0,0,0,0]; // array filled with zeroes to find the repitition count
	var hasDuplicate=0; // changes to one if the given number has a duplicate
	
	
	// asks the user for the number, and gives an error message if the input is not valid
	// it will keep asking if the user input is not valid.
	do {
		userInput = prompt("Enter a number:");

		if (userInput<10 && userInput>0){
			alert("A single digit number cannot have repitition. Please try again:");
		}
		else if (userInput <= 0) {
			alert("Only natural number allowed. Please try again.");
		}
	}while(userInput<10);

	// function call to get the number of digits
	var digitCounter = numberOfDigits(userInput);

	// uses modulo to get each number, and then puts them into the empty array.
	// the corresponding index in the counter array is increased by one. If any
	// index in the counter array has a value more than one, then there is a 
	// duplicate, and hasDuplicate increases. the modulo is subtracted from 
	// userInput, and then userInput is divided by 10.
	for (var i = 0; i < digitCounter;i++){
		array[i] = userInput%10;
		counterArray[array[i]] +=1;
		if(counterArray[array[i]] > 1){
			hasDuplicate = 1;
		}
		userInput = userInput - userInput%10;
		userInput = userInput/10;
	}

	// if there is a duplicate, this it is found and printed
	if(hasDuplicate){
		for(var i = 0; i<10;i++){
			if(counterArray[i] >1){
				alert(i + " was repeated " + counterArray[i] + " times.");
			}
		}
	}
	else {
			alert("No duplicate digits");
			}
	// asks the user if they want to test another number.
	userChoice = prompt("Would you like to run the program again? yes/no");

} while (userChoice != "no");
