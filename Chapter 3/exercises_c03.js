// -- Exercise 1
/* The previous chapter introduced the standard function
   Math.min that returns its smallest argument. We can do
   that ourselves now. Write a function min that takes two
   arguments and returns their minimum. */

// Your code here.
// Ternary operator version.
var min = function(x, y) {
	return x < y ? x : y;
}

// if - else version.
var minAlternative = function(x, y) {
	if (x < y) {
		return x;
	} else {
		return y;
	}
}

console.log(min(0, 10));
document.getElementById('result1').innerHTML += 'min(0, 10) = ' + min(0, 10) + '<br>';
// → 0
console.log(min(0, -10));
document.getElementById('result1').innerHTML += 'min(0, -10) = ' + min(0, -10) + '<br>';
// → -10



// -- Exercise 2
/* We’ve seen that % (the remainder operator) can be used
   to test whether a number is even or odd by using % 2 to
   check whether it’s divisible by two. Here’s another way
   to define whether a positive whole number is even or odd:
	* Zero is even.
	* One is odd.
	* For any other number N, its evenness is the same as N - 2.

   Define a recursive function isEven corresponding to this description.
   The function should accept a number parameter and return a Boolean.
   Test it on 50 and 75. See how it behaves on -1. Why? Can you think
   of a way to fix this? */

// Your code here.
// Ternary operator version.
var isEven = function(n) {
	n = n < 0 ? n * (-1) : n;
	return n == 0 || n == 1 ? (n == 0 ? true : false ) : isEven(n - 2);
}


// if - else version.
var isEvenAlternative = function(n) {
	if (n < 0) {
		n = n * (-1);
	};

	if (n == 0) {
		return true;
	} else if (n == 1) {
		return false;
	} else {
		return isEven(n - 2);
	}
}

console.log(isEven(50));
document.getElementById('result2').innerHTML += 'isEven(50) = ' + isEven(50) + '<br>';
// → true
console.log(isEven(75));
document.getElementById('result2').innerHTML += 'isEven(75) = ' + isEven(75) + '<br>';
// → false
console.log(isEven(-1));
document.getElementById('result2').innerHTML += 'isEven(-1) = ' + isEven(-1) + '<br>';
// → ??


// -- Exercise 3
/* You can get the Nth character, or letter, from a string by
   writing "string".charAt(N), similar to how you get its length
   with "s".length. The returned value will be a string containing
   only one character (for example, "b"). The first character has
   position zero, which causes the last one to be found at position
   string.length - 1. In other words, a two-character string has
   length 2, and its characters have positions 0 and 1.

   Write a function countBs that takes a string as its only argument
   and returns a number that indicates how many uppercase “B” characters
   are in the string.

   Next, write a function called countChar that behaves like countBs,
   except it takes a second argument that indicates the character that
   is to be counted (rather than counting only uppercase “B” characters).
   Rewrite countBs to make use of this new function. */

// Your code here.
// Ternary operator version.
var countBs = function(string) {
	var counter = 0;
	for (var i = 0; i < string.length; i++) {
		counter = string.charAt(i) == "B" ? counter + 1 : counter;
	}
	return counter;
}

// if - else version.
var countBsAlternative = function(string) {
	var counter = 0;
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) == "B") {
			counter++;
		};
	}
	return counter;
}

// Ternary operator version.
var countChar = function(string, char) {
	var counter = 0;
	for (var i = 0; i < string.length; i++) {
		counter = string.charAt(i) == char ? counter + 1 : counter;
	}
	return counter;
}

// if - else version.
var countCharAlternative = function(string, char) {
	var counter = 0;
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) == char) {
			counter++;
		};
	}
	return counter;
}

console.log(countBs("BBC"));
document.getElementById('result3').innerHTML += 'countBs("BBC") = ' + countBs("BBC") + '<br>';
// → 2

console.log(countChar("kakkerlak", "k"));
document.getElementById('result3').innerHTML += 'countChar("kakkerlak", "k") = ' + countChar("kakkerlak", "k") + '<br>';
// → 4
