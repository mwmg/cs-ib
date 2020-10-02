---
layout: section
topic: 06
title: OS types & Memory Management
comments: true
description: This section looks at operating system types and different ways that the OS can manage program memory efficiently.
excerpt_separator: <!-- more -->
---
<!-- more -->
## Multi-user environments
Many computer systems, especially servers, are used by multiple users. The OS thus needs to manage time and resources not only among processes, but also between users.

Each user's and each process's data and memory space needs to be separated securely in order to prevent access by other users or processes.

## OS types
**Single user, single task:** Early computers used to be like this. You would write your program on punch cards and book time on the computer to run it. Users would have to queue up to use the computer. If your program generated an error, you would have to come back next week! Modern examples of single-user, single-tasking OS's are Palm OS and early versions of the iPhone and iPad. Mobile phones are slowly developing multi-tasking capability though.

**Single user, multi-tasking:** A basic standalone home PC has one user who can run lots of different programs at the same time, e.g. Mac OS or Windows 7.

**Multi-user:** A network operating system, such as the one at school, in which multiple users can run multiple programs simultaneously, e.g. Windows Server 2012.

## Memory Management
Neccessary for:
- keeping memory spaces of processes apart
- keep memory spaces (both primary and secondary) of users apart
- **allocating** and **deallocating** memory for each process
- **paging** divides virtual memory up into equal-sized blocks (pages)
- paging allows to use memory in a _non-contiguous_ way (not in order), avoiding _fragmentation_

### Virtual memory
This technology makes use of secondary memory as if it were primary memory and is necessary for swapping out processes, e.g. those blocked on I/O. The OS treats all virtual memory the same, adding a layer of abstraction, so that programs referencing to memory spaces do not need to worry, if the piece of information is on primary or secondary memory.

<img class="center-block img-responsive" src="/assets/img/virtual-memory.png" alt="Virtual memory" align="center" width="40%">

### Paging
Paging is a technique in which the physical memory is divided into blocks of the same size, which are called pages. When a process or program is run, it is also divided into pages and can be loaded into free memory pages. The advantage of this is that the free memory blocks don’t need to be contiguous, in other words in order. This avoid external fragmentation, which is when free memory can’t be used for a process because it is non-contiguous, even though the space is big enough. 
In order to keep track of the pages, the OS will have page map tables to locate them. Pages do also make it possible to keep not requested pages in the virtual memory to make the memory usage more efficient.
## Disadvantages of virtual memory
Although virtual memory makes a more efficient use of memory possible, it tends to be slower due to the access times of the secondary memory. Also the system may be busier paging in and out memory, than actually executing the processes, again slowing down the whole system. Virtual memory also requires hardware support, usually by the MMU (memory management unit).
Also there will be less secondary memory available for storage, although this is not a great disadvantage considering its common memory capacities.

