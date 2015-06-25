
// Exercise 1
var hashtags = "";

for (var i =  0; i < 7; i++) {
	console.log(hashtags);
	document.getElementById('result1').innerHTML += hashtags + "<br>"; 
	hashtags += "#";	
};


// Exercise 2

for (var i = 1; i <= 100; i++) {
	var write = i;
	if (i % 3 == 0 && i % 5 == 0) {
		write = "FizzBuzz";
	} else if (i % 5 == 0) {
		write = "Buzz";
	} else if (i % 3 == 0) {
		write = "Fizz";
	}

	console.log(write);
	document.getElementById('result2').innerHTML += write + "<br>"; 
}


// Exercise 3

var line = "";
var size = 20;

for (var i = 0; i < size; i++) {
	if (i % 2 == 0) {
		for (var j = 0; j < size; j++) {
			if (j % 2 == 0) {
				line += "#";
			} else {
				line += " ";
			};
		};
	} else {
		for (var j = 0; j < size; j++) {
			if (j % 2 == 0) {
				line += " ";
			} else {
				line += "#";
			};
		};
	}
	console.log(line);
	document.getElementById('result3').innerHTML += line + "<br>"; 
	line = "";
};
