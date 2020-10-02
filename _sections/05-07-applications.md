---
layout: section
topic: 05
title: Applications
comments: true
description: Evaluation of static and dynamic data structures. Comparison of different data structures given their computational complexity in Big O notation.
excerpt_separator: <!-- more -->
---
<!-- more -->
Note: the big O notation and complexity of algorithms are not required by the IB syllabus, but are a common way of comparing algorithms and data structures.

## Big O notation
This chapter is about comparing different static and dynamic data structures. A useful concept for this is the big O notation which describes the complexity of an algorithm (computational/time). It helps to describe how much time an algorithm will take to solve a problem. Here we will refer to the **worst-case** scenario for each algorithm. The best way to understand the big O notation is by looking at a few examples:
- O(n) - linear time: this means that as the execution time will grow proportional to the data input size `n`
- O(n<sup>2</sup>) - polynomial time: this means that execution time is proportional to the square of the data input size
- O(2<sup>n</sup>) - exponential time: this means that execution time grows exponentially with data input size
- O(log n) - logarithmic time:	execution time grows in a logarithmic relationship to data input size

[Big-O cheat sheet](http://bigocheatsheet.com/) provides a good overview on different complexities and also shows a table comparing access, search, insertion and deletion complexity for different data structures.

<img class="center-block img-responsive" src="/assets/img/complexities.jpg" alt="Comparison of complexities" align="center">
_Figure 1: Comparison of common complexities_

## Applications
### Arrays
- when size is known
- smaller number of elements
- ordered array for better search performance and low insertion rate
- when all elements are defined at the beginning and are just changed
 
Examples:
- game board, e.g. battleship board
- student’s progress for a limited sized class

### Stack
- when you need elements to get first in and last out (LIFO)
- when search and traversal is not needed

Examples:
- undo/redo history: undo button pops the last element of the stack, to get back to the former state, e.g. in web browsers, word processors
- the Java Virtual Machine uses stacks to remember not finished methods of a program

### Queues
- when you need the first element to be inserted also be the first to get out (FIFO)
- when search and traversal is not needed

Examples:
- any kind of buffer, e.g. keyboard input, GUI drawer

### Linked Lists
- when you don’t know the size ahead of time
- if you don’t need random access
- if you want to insert or delete elements in the middle of the list efficiently
- where memory efficiency is needed

Examples:
- Input dependent structures, e.g. Strings
- Implementations of stacks or queues

### Binary Trees
- if you need fast search and traverse performance
- big number of elements
- ordered elements

Example:
- databases with a lot of random acess
- Binary Space Partition: 3D video game rendering
