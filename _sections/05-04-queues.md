---
layout: section
topic: 05
title: Queues
comments: true
description: This sections looks at queue data structures. This includes important characteristics of queues, how to process them and some of its applications.
excerpt_separator: <!-- more -->
---
## 5.1.8 Describe the characteristics and applications of a queue.
### Characteristics
Similar to a stack, a queue works logically like a physical queue. Take for instance a queue of people waiting for the train.

<img class='center-block img-responsive' src="/assets/img/queue-people.jpg" alt="Waiting queue" align="center" width="60%">
_Figure 1: Waiting queue \([Wikimedia Commons](https://commons.wikimedia.org/wiki/File:People_waiting_a_train_of_Line_13_to_come_02.JPG)\)_

The first person to stand in the queue will also be the first person to enter the train. A data structure queue works similarly with the following characteristics:

<img class='center-block img-responsive' src="/assets/img/queue-data-structure.png" alt="Queue data structure" align="center" width="60%">
_Figure 2: Queue data structure \([Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Data_Queue.svg)\)_

- FIFO - First In First Out means that the element to be first enqueued will also be the first element to be dequeued
- to enqueue means to add an element to the back of the queue
- to dequeue means to remove an element from the front of the queue

### Linear vs. Circular queues
Linear queues and circular queues mainly differ in how they enqueue elements. A **linear queue** just adds elements at the end of the queue. In contrast to a physical queue, however, a linear queue doesn't move "forward" once an element is dequeued, as this would be quite resource intensive. This can lead to considerably large memory use, as memory isn't reused in a linear queue. There is also the risk of overwriting important data in memory. On the other hand, the linear queue just consists of two pointers: one for the start and one for the end. This makes the linear queue easy to implement.

A **circular queue** on the other hand tries to reuse memory. The whole queue is placed in a fixed buffer in the memory. 

<img class='center-block img-responsive' src="/assets/img/circular-queue.png" alt="Circular queue" align="center" width="60%">
_Figure 3: Circular queue \([Code Project](https://www.codeproject.com/Articles/43510/Lock-Free-Single-Producer-Single-Consumer-Circular)\)_

The principle of moving start and end pointers at enqueueing and dequeueing is the same as with a linear queue with one difference. Once the end of the buffer is reached, the next element will be enqueued at the start of the buffer, which is why it is called circular. This however, requires the implementation of pointers for each element, requiring more space and making it harder to implement. Also, the buffer size obviously limits the available space for data.

### Applications
Some common applications of queues include:
- Simulating Waiting lines
- Buffers for I/O
- Print Queues
- Keyboard Strokes
- Video Frames

## 5.1.9 Construct algorithms using the access methods of a queue.
Access methods include:
- enqueue: adds an element to the queue
- dequeue: removes an element from the queue
- isEmpty: checks if the queue is empty
- front: points to the front of the queue
- back: points to the back of the queue