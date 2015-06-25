// Exercise 1
/* The sum of a range

   The introduction of this book alluded to the following as a nice way to compute
   the sum of a range of numbers:
	  console.log(sum(range(1, 10)));

   Write a range function that takes two arguments, start and end, and returns
   an array containing all the numbers from start up to (and including) end.

   Next, write a sum function that takes an array of numbers and returns the
   sum of these numbers. Run the previous program and see whether it does
   indeed return 55.

   As a bonus assignment, modify your range function to take an optional
   third argument that indicates the “step” value used to build up the array.
   If no step is given, the array elements go up by increments of one,
   corresponding to the old behavior. The function call range(1, 10, 2) should
   return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so
   that range(5, 2, -1) produces [5, 4, 3, 2]. */

// Your code here.
function range(start, end, step) {
	var numRange = [];
	!step ? step = 1 : step;

	if ((step > 0 && start > end) ||  (step < 0 && start < end)) {
		return 0;
	} else {
		if (step < 0) {
			for (var i = start; i >= end; i = i + step) {
				numRange.push(i);
			};
		} else {
			for (var i = start; i <= end; i = i + step) {
				numRange.push(i);
			};
		};
	};
	return numRange;
}

function sum(numArray) {
	if (numArray) {
		var total = 0;
		for (var i = 0; i < numArray.length; i++) {
			total += numArray[i];
		}
		return total;
	} else {
		return "Range and step data is incorrect.";
	}
}

console.group();
	console.info("-- Exercise 1 --")
	console.group();
		console.log("sum(range(1, 10)) = ");
			console.log(sum(range(1, 10)));
		// → 55
	console.groupEnd();

	console.group();
		console.log("range(5, 2, -1) = ");
		console.log(range(5, 2, -1));
		// → [5, 4, 3, 2]
	console.groupEnd();

	console.group();
		console.log("sum(range(1, 10, -1)) = ");
		console.log(sum(range(1, 10, -1)));
		// → Error
	console.groupEnd();
console.groupEnd();



// Exercise 2
/* Reversing an array

   Arrays have a method reverse, which changes the array by inverting the order
   in which its elements appear. For this exercise, write two functions, reverseArray
   and reverseArrayInPlace. The first, reverseArray, takes an array as argument and
   produces a new array that has the same elements in the inverse order. The second,
   reverseArrayInPlace, does what the reverse method does: it modifies the array given
   as argument in order to reverse its elements. Neither may use the standard reverse method.

   Thinking back to the notes about side effects and pure functions in the previous
   chapter, which variant do you expect to be useful in more situations? Which one is more
   efficient? */

// Your code here.
var testArray = ['foo', 2, 'bar', 'John Doe', 68];

function reverseArray(array) {
	var newArray = [];
	for (var i = (array.length - 1); i >= 0; i--) {
		newArray.push(array[i]);
	}
	return newArray;
}

function reverseArrayInPlace(array) {
	var temp;
	for (var i = 0; i < Math.floor(array.length / 2); i++) {
		temp = array[array.length - 1 - i];
		array[array.length - 1 - i] = array[i];
		array[i] = temp;
	}
}

console.group();
	console.info("-- Exercise 2 --")
	console.group();
		console.log('reverseArray(["A", "B", "C"]) = ');
		console.log(reverseArray(["A", "B", "C"]));
		console.log("");
		// → ["C", "B", "A"];
	console.groupEnd();

	console.group();
		var arrayValue = [1, 2, 3, 4, 5];
		reverseArrayInPlace(arrayValue);
		console.log("var arrayValue = [1, 2, 3, 4, 5];");
		console.log("reverseArrayInPlace(arrayValue);");
		console.log("arrayValue = ");
		console.log(arrayValue)
		console.log("");
		// → [5, 4, 3, 2, 1]
	console.groupEnd();
console.groupEnd();

// Exercise 3
/* A list

   Objects, as generic blobs of values, can be used to build all sorts of data
   structures. A common data structure is the list (not to be confused with the array).
   A list is a nested set of objects, with the first object holding a reference to
   the second, the second to the third, and so on.

   var list = {
     value: 1,
     rest: {
       value: 2,
       rest: {
         value: 3,
         rest: null
       }
     }
   };
   The resulting objects form a chain, like this:

	__________
   | value: 1 |          __________
   | rest: ------------>| value: 2 |          ____________
   |__________|         | rest: ------------>| value: 2   |
   						|__________|		 | rest: null |
											 |____________|

   A nice thing about lists is that they can share parts of their structure.
   For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list}
   (with list referring to the variable defined earlier), they are both independent
   lists, but they share the structure that makes up their last three elements. In
   addition, the original list is also still a valid three-element list.

   Write a function arrayToList that builds up a data structure like the previous
   one when given [1, 2, 3] as argument, and write a listToArray function that
   produces an array from a list. Also write the helper functions prepend, which
   takes an element and a list and creates a new list that adds the element to
   the front of the input list, and nth, which takes a list and a number and
   returns the element at the given position in the list, or undefined when
   there is no such element.

   If you haven’t already, also write a recursive version of nth. */

// Your code here.

function arrayToList(array) {
	var lastObj = {};
	for (var i = array.length - 1; i >= 0; i--) {
		var currObj = {};
		currObj.value = array[i];
		i == array.length - 1 ? currObj.rest = null : currObj.rest = lastObj;
		lastObj = currObj;
	}
	return lastObj;
}

function listToArray(list) {
	var array = [];
	for (var level = list; level; level = level.rest) {
		array.push(level.value);
	}
	return array;
}

function prepend(val, list) {
	return {value: val, rest: list};
}

function nth(list, x) {
	var index = 0;
	var result = 0;
	for (var level = list; level; level = level.rest) {
		if (index == x) {
			result = level.value;
		};
		index++;
	}
	return result ? result : undefined;
}

function nthRecursive(list, x) {
	return !list ? undefined : (x == 0 ? list.value : nthRecursive(list.rest, x - 1));
}

console.group();
	console.info("-- Exercise 3 --")
	console.group();
		console.log("arrayToList([10, 20]) =");
		console.log(arrayToList([10, 20]));
		// → {value: 10, rest: {value: 20, rest: null}}
	console.groupEnd();

	console.group();
		console.log("listToArray(arrayToList([10, 20, 30])) =");
		console.log(listToArray(arrayToList([10, 20, 30])));
		// → [10, 20, 30]
	console.groupEnd();

	console.group();
		console.log("prepend(10, prepend(20, null)) = ");
		console.log(prepend(10, prepend(20, null)));
		// → {value: 10, rest: {value: 20, rest: null}}
	console.groupEnd();

	console.group();
		console.log("nth(arrayToList([10, 20, 30]), 1) =");
		console.log(nth(arrayToList([10, 20, 30]), 1));
		// → 20
	console.groupEnd();

	console.group();
		console.log("nthRecursive(arrayToList([10, 20, 30]), 1) =");
		console.log(nthRecursive(arrayToList([10, 20, 30]), 1));
		// → 20
	console.groupEnd();
console.groupEnd();

// Exercise 4
/* Deep comparison

   The == operator compares objects by identity. But sometimes,
   you would prefer to compare the values of their actual properties.

   Write a function, deepEqual, that takes two values and returns true
   only if they are the same value or are objects with the same properties
   whose values are also equal when compared with a recursive call to
   deepEqual.

   To find out whether to compare two things by identity (use the === operator for that)
   or by looking at their properties, you can use the typeof operator. If it
   produces "object" for both values, you should do a deep comparison. But
   you have to take one silly exception into account: by a historical accident,
   typeof null also produces "object". */

// Your code here.
function deepEqual(subjectA, subjectB) {
	if (typeof subjectA != "object" || typeof subjectB != "object") {
		return subjectA === subjectB;
	} else if (typeof subjectA != null && subjectB != null) {
		// Deep comparison.
		for (var property in subjectA) {
			if (!subjectB[property]) {
				return false;
			} else if (!deepEqual(subjectA[property], subjectB[property])) {
				return false;
			}
		}
		return true;
	} else {
		return false;
	}
}

console.group();
	console.info("-- Exercise 4 --");
	console.log('var obj = {here: {is: "an"}, object: 2};');
	var obj = {here: {is: "an"}, object: 2};
	console.group();
	console.log("deepEqual(obj, obj) =");
		console.log(deepEqual(obj, obj));
		// → true
	console.groupEnd();

	console.group();
	console.log("deepEqual(obj, {here: 1, object: 2}) =");
		console.log(deepEqual(obj, {here: 1, object: 2}));
		// → false
	console.groupEnd();

	console.group();
	console.log('deepEqual(obj, {here: {is: "an"}, object: 2}) =');
		console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
		// → true
	console.groupEnd();
console.groupEnd();