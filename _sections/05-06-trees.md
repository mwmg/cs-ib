---
layout: section
topic: 05
title: Binary trees
comments: true
description: This section looks at how trees work logically, common terminology, how binary trees can be traversed to retrieve data in different ways and how trees can be sketched.
excerpt_separator: <!-- more -->
---
<!-- more -->
## 5.1.14-15 Characteristics of trees
Trees are hierarchical data structures that are best explained with a sketch.

<img class="center-block img-responsive" src="/assets/img/binary-tree.png" alt="Binary tree" align="center" width="50%">
_Figure 1: Binary tree_

A tree consists of **nodes**, which contain a piece of information and are represented by numbers in this sketch. The uppermost node is called the **root** and it serves as the starting point when retrieving data from the tree - in Figure 1 the number 8 is the root node. It has therefore has the highest rank in the tree hierarchy. A node can link to other nodes, which are then called **child nodes** - in a binary tree to a maximum of two. Consequently, the upper node is called a **parent node**. For example, in the sketch number 3 is a parent node of 1 and 6, which are its child nodes. As 6 has further child nodes, it can be considered to be the root of a **subtree**, which is part of the tree as a whole. Number 1 on the other hand has no further child nodes, which is why it is called a **leaf**. Other leaves here are 4, 7 and 13.

### Binary and non-binary trees
Binary trees have the characteristic of being ordered. The **left-child** (e.g. 3) must come before the parent node (i.e. 8) and the **right-child** must come after the parent node (i.e. 10). For this reason each node in a binary tree can have a maximum of two child nodes only.

Non-binary trees on the other hand do not follow these rules and could be used for example to represent animal species trees.

## 5.1.16 Different tree traversal methods
### Preorder traversal	
A walk in which each parent node is traversed before its children.

<img class="center-block img-responsive" src="/assets/img/preorder-traversal.png" alt="Preorder Tree Traversal" align="center" width="60%">
_Figure 4: Preorder Tree Traversal_

<ol>
	<li>Display the data part of the root (or current node).</li>
	<li>Traverse the left subtree by recursively calling the pre-order function.</li>
	<li>Traverse the right subtree by recursively calling the pre-order function.</li>
</ol>

Result: F, B, A, D, C, E, G, I, H.

### Inorder traversal
A walk in which a node's left subtree, then the node itself, and finally its right subtree are traversed.

<img class="center-block img-responsive" src="/assets/img/inorder-traversal.png" alt="Inorder Tree Traversal" align="center" width="60%">
_Figure 2: Inorder Tree Traversal_

<ol>
	<li>Traverse the left subtree by recursively calling the in-order function.</li>
	<li>Display the data part of the root (or current node).</li>
	<li>Traverse the right subtree by recursively calling the in-order function.</li>
</ol>

Result: A, B, C, D, E, F, G, H, I.

### Postorder traversal
A walk in which the children are traversed before their respective parents are traversed.

<img class="center-block img-responsive" src="/assets/img/postorder-traversal.png" alt="Postorder Tree Traversal" align="center" width="60%">
_Figure 3: Postorder Tree Traversal_

<ol>
	<li>Traverse the left subtree by recursively calling the post-order function.</li>
	<li>Traverse the right subtree by recursively calling the post-order function.</li>
	<li>Display the data part of the root (or current node).</li>
</ol>

Result: A, C, E, D, B, H, I, G, F.
