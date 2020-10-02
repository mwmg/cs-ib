---
layout: section
topic: 05
title: Multi-dimensional arrays
comments: true
description: This sections looks at characteristics of multi-dimensional arrays, some of its applications and how to work with them.
excerpt_separator: <!-- more -->
---
## Review: What is an array?
An array is a data structure which stores a collection of elements. Each element can be identified by an _array index_ or _key_.

<img class='center-block img-responsive' src="/assets/img/one-dimensional-array.png" alt="Illustration of one-dimensional array" align="center" >
_Figure 1: Illustration of one-dimensional array \([By Jarkko Piiroinen, via Wikimedia Commons](https://commons.wikimedia.org/wiki/File%3AArray1.svg)\)_

In this illustration each element is represented by a box and its index is represented by the number on top. This also shows how in most programming languages an array index starts counting at 0.
## 5.1.4 Describe the characteristics of a two- dimensional array.
A two-dimensional array is simply an array in which each element contains another array. The following illustration shows this.

<img class='center-block img-responsive' src="/assets/img/two-dimensional-array.png" alt="Illustration of two-dimensional array" align="center" >
_Figure 2: Illustration of two-dimensional array \([By Derrick Coetzee, via Wikimedia Commons](https://commons.wikimedia.org/wiki/File%3AArray_of_array_storage.svg)\)_

The common notation for accessing a two dimensional array is `array[i][j]`, where `i` is the index of element in the main array, and `j` is the index for the element in the inner array. A useful and common example of such a two-dimensional array, is the representation of a table as follows.

<table class="table table-bordered">
    <tr>
        <td>arr[0][0]</td>
        <td>arr[0][1]</td>
        <td>arr[0][2]</td>
        <td>arr[0][3]</td>
    </tr>
    <tr>
        <td>arr[1][0]</td>
        <td>arr[1][1]</td>
        <td>arr[1][2]</td>
        <td>arr[1][3]</td>
    </tr>
    <tr>
        <td>arr[2][0]</td>
        <td>arr[2][1]</td>
        <td>arr[2][2]</td>
        <td>arr[2][3]</td>
    </tr>
</table>

In such an example, the index `i` would indicate the row and `j` would indicate the column.

This idea can be extended to multi-dimensional arrays, where each array in an element contains further arrays.
## 5.1.5 Construct algorithms using two-dimensional arrays.
Tables have many applications and so do two-dimensional arrays. For instance, tables can be used to store the distances between cities.

<img class='center-block img-responsive' src="/assets/img/distance-matrix-nz.jpg" alt="Distance matrix example" align="center" width="60%" >
_Figure 3: Distances between cities in New Zealand \([Champion Freight](http://www.championfreight.co.nz/distance)\)_

This could be used for calculating the total distance of a given path or to find the shortest route for a given tour.

Two-dimensional arrays are also often used for games, e.g. battleship or chess. Programming such a game is a good exercise to practise algorithmic thinking and the use of arrays!

**Further reading:** WikiBooks provides an excellent explanation of arrays and has good practice exercises for algorithms using two-dimensional arrays [here](https://en.wikibooks.org/wiki/A-level_Computing/AQA/Problem_Solving,_Programming,_Data_Representation_and_Practical_Exercise/Fundamentals_of_Programming/Two-Dimensional_Arrays).