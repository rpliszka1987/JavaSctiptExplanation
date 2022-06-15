# Study JavaScript Computer Science

## Table of Concept

- [Description](#description)
- [JavaScript Data Structures](#javascript-data-structures)
- [JavaScript Information](#javascipt-information)
- [JavaScript Closure](#javascript-closure)
- [JavaScript Factory-Function](#javascript-factory-function)
- [JavaScript Algorithms](#algorithms)
- [JavaScript Lineral Search](#lineral-search)
- [JavaScript Binary Search](#binary-search)
- [JavaScript Recursion](#recursion)
- [JavaScript Big-O](#big-o)

## Description

This is a GitHub repository to write down Module 17 from Columbia Boot Camp which exmplains how JavaScript works. From the flow of the application to Asynchronous and Synchronous Functions.

## JavaScript Data Structures

- Call Stack - Where JS executes and evalutes the code. Call stack data is being ran by Last In First Out (LIFO)
- Callback Queue - Enables JS to handle Asynchronous Functions. Callback Queue is First In First Out (FIFO). It is like a line the order in which they are passed can effect application performance.
- Memory Heap - This is where the data is stored.

## JavaScipt Information

- JavaScript is Single-Threaded, which meand is can only execute one line of code at a time.
- Thread of Execution (TOA) - Current line of code being executed.
- Functions and Variables are being added to Global Memory.
- Stack Overflow Error Message - Occurs when too many functions are placed into the call stack, exceeding its capacity.
- return statment inside a function is what pops the function off the call stack.
- Asynchronous Functions - Run in the background to avoid slowing down a site. Example would be a fetch request, which could be time consuming and will slow down UI due to the fetch request. This is a bad user experience.
- setTimeout() even with a value of 0 will still be delayed due to the code after being ran first.

JavaScript Data Structure
![alt text](./images/javaScriptDataStructure.png)

## JavaScript Closure

- Closure is when a function is returned. It is a function which returns a function.
- Closures are not exposed to the rest of the application.
- Any variables stored inside a closures lexical environment wont be available to other functions outside of this scope. This is different from global variable which are available to all functions in the program. This is good practice to avoid overriding global variables values. It also keeps the variables private due to not being accessible from everywhere.
- Example in ./Closure/closure.js

## JavaScript Factory Function

- Factory Function - are function which return objects. Very similar to closure but they return an object instead of a function.
- Example in ./FactoryFunction/index.js

## Algorithms

- Algorithms - are series of steps to solve a problem or perform an action.
- FizzBuzz is an inteview question which had been asked before. It is a program that prints numbers 1 - 100. Every number divisible by 3 will print for Fizz. Every number divisible by 5 will print Buzz. Finally every number divisible by 3 and 5 will print FizzBuzz.

## Lineral Search

- A lineral Search looks at every index in sequential order.
- Use break or return to break out of loop to avoid having to run through all numbers in the array if the number we been searchng for has been found.
- Example in /Algorithms/search.js

## Binary Search

- A Bianry Search works by continually dividing the data in half based on weather the number you are looking for is greater or less then a chosen middle point.
- Example in /Algorithms/binary.js

## Recursion

- A recursion is the act of a fucntion calling itself.
- Example in /Algorithms/binary.js

## Big O

- Big O is how efficient or inefficient an algorithm performs. O in the Big O stand for order.
- This is used to measue how long a user might have to wait to get the data.

![big-o image](./images/300-big-o.png)

[Back to Top](#study-javascript-computer-science)
