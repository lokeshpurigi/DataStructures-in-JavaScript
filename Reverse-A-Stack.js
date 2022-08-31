class StackNode
{
    constructor(element, next)
    {
        this.element = element;
        this.next = next;
    }
}
// Define a custom stack
class MyStack
{
    constructor()
    {
        //Set node values
        this.top = null;
        this.size = 0;
    }
    // Add node at the top of stack
    push(element)
    {
        this.top = new StackNode(element, this.top);
        this.size++;
    }
    isEmpty()
    {
        if (this.size > 0 && this.top != null)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    // Remove top element of stack
    pop()
    {
        if (this.size > 0 && this.top != null)
        {
            var temp = this.top;
            // Change top element of stack
            this.top = temp.next;
            // remove previous top
            temp = null;
            this.size--;
        }
    }
    // return top element of stack
    peek()
    {
        return this.top.element;
    }
}
class ReverseElements
{
    // Print element of stack
    printData(stack)
    {
        var temp = stack.top;
        // iterate stack elements
        while (temp != null)
        {
            // Display element value
            process.stdout.write("  " + temp.element);
            temp = temp.next;
        }
        process.stdout.write("\n");
    }
    // Transfer all stack t1 data into a stack t2
    transferData(t1, t2)
    {
        var data = 0;
        // Executing the loop until when t1 stack element are not empty
        while (t1.isEmpty() == false)
        {
            // Get the top element of t1 stack
            data = t1.peek();
            // Remove top of current t1 stack
            t1.pop();
            // Add data to t2 stack
            t2.push(data);
        }
    }
    // This is reverse the stack elements by using of auxiliary stacks
    reverseStack(stack)
    {
        // Create two auxiliary stacks
        var auxiliary1 = new MyStack();
        var auxiliary2 = new MyStack();
        // Send the all elements from actual stack into auxiliary1
        this.transferData(stack, auxiliary1);
        // Send the all elements from auxiliary1 into auxiliary2
        this.transferData(auxiliary1, auxiliary2);
        // Send the all elements from auxiliary2 into actual stack
        this.transferData(auxiliary2, stack);
    }
}

function main()
{
    var task = new ReverseElements();
    // Create a stack
    var stack = new MyStack();
    // Add elements
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);
    stack.push(7);
    stack.push(8);
    /*
    Constructed stack
    ==========
        8  <-- Top
        7  
        6  
        5  
        4  
        3  
        2  
        1
    */
    // Display stack elements
    process.stdout.write(" Before Reverse \n");
    task.printData(stack);
    // Perform reverse operation
    task.reverseStack(stack);
    /*
    After reverse
    ==========
        1  <-- Top
        2  
        3  
        4  
        5  
        6  
        7  
        8
    */
    // Display stack elements
    process.stdout.write("\n After Reverse \n");
    task.printData(stack);
}
main();