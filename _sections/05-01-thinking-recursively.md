---
layout: section
topic: 05
title: Thinking recursively
comments: true
description: This sections looks at the concept of recursion and how it is used in different algorithms. It also covers the tracing of recursive algorithms.
excerpt_separator: <!-- more -->
---
<!-- more -->
## What is recursion?
Recursion is defined as _"the repeated application of a recursive procedure or definition"_. In computing this usually means the concept of a function or method calling itself repeatedly. This is used to accomplish repetitive tasks similar to a loop.

If this seems confusing, the following examples can help to illustrate the concept. You could also try a Google search for 'recursion'. Not only will you find useful links, but also one of Google's wonderful easter eggs.

<img class='center-block img-responsive' src="/assets/img/google-recursion.jpg" alt="Google search for recursion" align="center" width="60%">
_Figure 1: Google search for 'recursion'_

In a way, this is an example of recursion as the suggestion links back to exactly the same search.
### Why not use normal loops?
Usually algorithms implemented through recursion could also be implemented as loops. However, in many cases the recursive approach is easier and more intuitive. Recursion divides a problem into similar smaller subproblems until the smallest possible problem can be solved and results are carried back. The key here is that all subproblems are of the same type. See the following discussion on [Stack Overflow](http://stackoverflow.com/questions/15688019/recursion-versus-iteration) for more information.

## 5.1.1 Identify a situation that requires the use of recursive thinking.
Some example problems where recursion can be used are mathematical fractals, such as the _Koch snowflake_, factorials, the Fibonacci series, the towers of Hanoi.

Let's take a look at a simple mathematical series: triangular numbers. Let's say we stack up some elements in a triangular form like this:

<img class='center-block img-responsive' src="/assets/img/triangular-numbers.png" alt="Triangular numbers" align="center" width="60%">
_Figure 2: Triangular numbers \([Wikimedia: By Melchoir - Own work, CC BY-SA 3.0](https://commons.wikimedia.org/w/index.php?curid=16942149)\)_

Now we only know how many rows we have and we want to find out what the number of elements is. In _Figure 2_ you can see that for 2 rows we have 3 elements, for 3 rows 6 elements, and so on.

Notice how in each row, starting from the top, the number of elements increases by one. If we start counting from the top, the n-th row will always have n elements, i.e. the second row has 2 elements and so on. This leads us to the following recursive code:

    Function triangle(n){
      if n = 1
        then return 1
      else
        return n + triangle(n-1)
      endif
    }

The function will keep calling itself with one row less, until it reaches n = 1, where the number of elements equals 1. The results is returned and added to the number of elements in the next row until all rows were considered.
## 5.1.2 Identify recursive thinking in a specified problem solution.
Recursion can be applied when a problem can be divided into smaller problems that are similar to the big problem itself. The best way to understand this, is to look at algorithms for some examples, such as the ones mentioned above.

A very common application of recursion in computer science is the traversal of binary trees, which will be covered in more detail later in topic 5.
## 5.1.3 Trace a recursive algorithm to express a solution to a problem.
When given an algorithm it is useful to be able to trace it in order to find the result it should give. This can be useful to check an algorithm for correctness as it is manually checked step for step.

Let's trace the example algorithm for triangular numbers for 6 rows - triangle(6).

<table class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>n</th>
            <th>return</th>
            <th>final returned value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>6</td>
            <td>6 + triangle(5)</td>
            <td>6 + 15 = 21</td>
        </tr>
        <tr>
            <td>5</td>
            <td>5 + triangle(4)</td>
            <td>5 + 10 = 15</td>
        </tr>
        <tr>
            <td>4</td>
            <td>4 + triangle(3)</td>
            <td>4 + 6 = 10</td>
        </tr>
        <tr>
            <td>3</td>
            <td>3 + triangle(2)</td>
            <td>3 + 3 = 6</td>
        </tr>
        <tr>
            <td>2</td>
            <td>2 + triangle(1)</td>
            <td>2 + 1 = 3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
    </tbody>
</table>

The algorithm will keep calling itself until the base condition n = 1 is met and a value of 1 is returned. This is repeatedly added to the respective value of n until the value for triangle(6) is found.
