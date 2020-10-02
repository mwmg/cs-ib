---
layout: section
topic: 05
title: Linked Lists
comments: true
description: This sections looks at linked lists as data structures. This includes important characteristics of linked lists, how to process them and some of its applications.
excerpt_separator: <!-- more -->
---
## 5.1.11 Describe the features and characteristics of a dynamic data structure.
A **dynamic data structure** is a data structure that is flexible in growing or shrinking in size. This can make memory allocation more efficient, by only using as much as is necessary, while also allowing the programmer to design more flexible algorithms, where the size of a data structure is not known before runtime.

### Nodes & pointers
**Nodes and pointers** are two concepts commonly used for dynamic data structures. The idea is that each data element is allocated a _node_ for storing information. In addition, each node has a _pointer_ which points to the memory space in which the next node (data element) is stored.

## 5.1.12 Describe how linked lists operate logically.
### Characteristics
A linked list is based on these concepts of _nodes_ and _pointers_, as shows on the following diagram.

<img class='center-block img-responsive' src="/assets/img/linked-list.jpg" alt="Linked list" align="center">
_Figure 1: Linked list structure_

In addition, to the nodes, there is a **head** pointer which includes a reference to the first node in the linked list. The pointer of the last node in the list will also indicate the end of the linked list. This can be done in different ways, e.g. by pointing to _null_ (nowhere).

### Pros & Cons
**Advantages**:
- flexible size
- easy to implement stacks or queues with linked lists
- simple insertion and deletion of nodes

**Disadvantages**:
- additional memory usage because of pointers
- sequential access only
- nodes are stored incontiguously, which can slow down access speeds

### Applications
Some common applications of linked lists include:
- implementing other dynamic data structures, e.g. stacks or queues
- document viewer (e.g. images) using buttons for previous and next elements can make use of (doubly) linked lists
- dynamic memory allocation
- process management, e.g. Linux process management

## 5.1.13 Sketch linked lists (single, double and circular).
See figure 1 above for the single linked list.
### Doubly linked list
In addition to the pointer to the next node, each node also has a pointer referencing the previous node, as illustrated in figure 2.

<img class='center-block img-responsive' src="/assets/img/doubly-linked-list.jpg" alt="Doubly linked list" align="center">
_Figure 2: Doubly linked list structure_

This allows to also moving backwards through the list, potentially increasing access speeds or making certain algorithms easier to implement. However, the tradeoff is the additional memory space consumed by the backwards pointer.
### Circular linked list
Sometimes the last node of a linked list does not point to _null_, but back to the first node instead. This is called a _circular linked list_ and is illustrated in figure 3.

<img class='center-block img-responsive' src="/assets/img/circular-linked-list.jpg" alt="Circular linked list" align="center">
_Figure 3: Circular linked list structure_

This type of linked list has a tail node instead of a head, which usually points to the last node. This has the benefit that nodes can be appended to the end very quickly.
### Adding elements
The first step is to create a pointer to the node after which the new node is to be inserted. At the same time a new node is created.

<img class='center-block img-responsive' src="/assets/img/adding-node-linked-list-1.jpg" alt="Adding node to linked list 1" align="center">
_Figure 4: Adding node to linked list 1_

The next step is to set the pointer of the new node to the following node.

<img class='center-block img-responsive' src="/assets/img/adding-node-linked-list-2.jpg" alt="Adding node to linked list 2" align="center">
_Figure 5: Adding node to linked list 2_

Lastly, the previous node needs to point to the new node.

<img class='center-block img-responsive' src="/assets/img/adding-node-linked-list-3.jpg" alt="Adding node to linked list 3" align="center">
_Figure 6: Adding node to linked list 3_

_Note that the process is slightly different when adding a node at the beginning or end of the list. It is also slightly different for doubly linked or circular linked lists. Figuring these processes out can be good practise._
### Deleting elements
Deleting elements is relatively easy, as it only requires to modify the previous node's pointer to the following node. After this the deleted node just needs to be removed from memory.

<img class='center-block img-responsive' src="/assets/img/delete-node-linked-list-1.jpg" alt="Deleting node to linked list 1" align="center">
_Figure 7: Deleting node to linked list 1_

<img class='center-block img-responsive' src="/assets/img/delete-node-linked-list-2.jpg" alt="Deleting node to linked list 2" align="center">
_Figure 8: Deleting node to linked list 2_

### Searching elements
Searching needs to be done sequentially as in linear search, because nodes can only be accessed by following pointers from node to node.
