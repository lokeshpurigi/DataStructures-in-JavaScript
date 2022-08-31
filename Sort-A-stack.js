function sortStack(input)
{
	var tmpStack = [];

	while (input.length!=0)
	{
		// pop out the first element
		var tmp = input[input.length-1];
		input.pop();

		// while temporary stack is not empty
		// and top of stack is smaller than temp
		while (tmpStack.length!=0 &&
				tmpStack[tmpStack.length-1] < tmp)
		{
			// pop from temporary stack and
			// push it to the input stack
			input.push(tmpStack[tmpStack.length-1]);
			tmpStack.pop();
		}

		// push temp in temporary of stack
		tmpStack.push(tmp);
	}

	return tmpStack;
}

function sortArrayUsingStacks(arr, n)
{
	// Push array elements to stack
	var input = [];
	for (var i=0; i<n; i++)
	input.push(arr[i]);

	// Sort the temporary stack
	var tmpStack = sortStack(input);

	// Put stack elements in arrp[]
	for (var i=0; i<n; i++)
	{
		arr[i] = tmpStack[tmpStack.length-1];
		tmpStack.pop();
	}
}

// main function
var arr = [989, 884, 355, 69, 553];
var n = arr.length;
sortArrayUsingStacks(arr, n);
for (var i=0; i<n; i++)
console.log( arr[i] + "");
