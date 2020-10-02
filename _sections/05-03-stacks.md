---
layout: section
topic: 05
title: Stacks
comments: true
description: This sections looks at stack data structures. This includes important characteristics of stacks, how to process them and some of its applications.
excerpt_separator: <!-- more -->
---
## 5.1.6 Describe the characteristics and applications of a stack.
### Characteristics
A stack data structure works logically like a physical stack. Take for example a stack of clean plates.

<img class='center-block img-responsive' src="/assets/img/plate-stack.jpg" alt="Stack of clean plates" align="center" width="80%">
_Figure 1: Stack of clean plates \([Pixabay](https://pixabay.com/en/plate-stack-terller-stack-tableware-629987/)\)_

Additional clean plates will be put on top of the stack and whenever a clean plate is needed, it will be taken from the top of the stack. This already illustrates the main characteristics of a stack:
- **_LIFO_** - Last In First Out means that the last element to be added to a stack will also be the first element to be removed
- Elements can be added to the top of a stack. This process is usually called **_push_**
- Elements can be removed from the top of the stack. This process is usually called **_pop_**

<img class='center-block img-responsive' src="/assets/img/stack-data-structure.png" alt="Stack data structure" align="center" width="60%">
_Figure 2: Stack data structure \([Wikimedia Commons](https://commons.wikimedia.org/wiki/File%3AData_stack.svg)\)_

In addition, a stack often includes a _stack pointer_ that points to the top element of the stack.

### Applications
A simple application of a stack is to reverse a string. As each character of the string is pushed to the stack, they will be popped out in reverse order. Such process can be applied to more complex applications of _backtracking_, e.g. recording steps taken in a maze in a stack in order to be able to reverse these steps to find the way back out of the maze. Each step taken would be pushed to a stack and when one wants to find the way back, each step will be popped out of the stack.

Backtracking is also used by many applications to reverse actions taken, e.g. in wordprocessors or web browsers.

Another application of stacks is memory management. In this case a program or thread has an allocated memory space which is treated as a stack. When a subroutine or function of the program is called, it can store data on top of the stack and once the function finishes, these data are popped of the stack. In a way, this ensures that variables and data from a function call are removed once the function finishes. The use of recursive functions illustrates how each function call adds something on top of the stack, and how the result is then returned all the way down the stack.

## 5.1.7 Construct algorithms using the access methods of a stack.
The basic access methods of a stack are:
- push
- pop
- isEmpty

**push** adds an element on top of the stack and changes the stack pointer to point to the new element.

**pop** removes an element from the top of the stack and changes the stack pointer to point to the previous element.

**isEmpty** checks if the stack has any elements. This can be checked through the stack pointer. If the stack pointer is undefined, the stack is empty.

## 5.1.10 Explain the use of arrays as static stacks and queues.
Each programming language usually comes with some implementation of stacks. For instance, in Java it is necessary to import the Stack class, which provides some standard methods for accessing stacks.

However, it is also possible to manually implement a stack oneself using arrays. Such a stack will be static, as the size of the array needs to be defined, which means that the stack can become full. One way of doing this, is to reserve the first element of the array for the stack pointer, which will contain the index of the current top element in the stack. If the stack pointer is stored in `array[0]`, then its initial value will be 0. If an element is now pushed, the stack pointer value increases to 1 and the new element is stored to `array[1]`. The other way round if an element is popped from the stack, the top element in the array will be set to `null` and the stack pointer value will be decreased by one.
