---
layout: section
topic: 06
title: Multi-tasking and the OS
comments: true
description: This section looks at different ways of how CPU time can be shared in order to multi-task.
excerpt_separator: <!-- more -->
---
<!-- more -->
## Multi-tasking
A computer system has a set of limited resources, but in most situations it is desirable to run multiple programs at once in order to multi-task. This leads to the problem of how to best share available resources among running programs.

The most important concepts here include:
### Multiple CPUs ("cores")
For example: dual core, quad core , graphics processor, etc.
- greater processing power
- extra layer of complexity
- dedicated processing power (GPU)

### Time-slicing
- processing time is divided equally among all running programs
- works well only if all programs require the same processing power, which seldomly is the case

### Prioritisation
- some processes are treated as more important than others

### Polling
- approach for handling I/O
- CPU keeps asking program or other resource whether it needs CPU time

### Interrupts
- approach for handling I/O
- instead of polling, the process sends an "interrupt" to the CPU to receive CPU time

### Blocking
- a process can declare itself to be _blocked_, meaning that it is unable to proceed, until some condition is met, e.g. some input is provided
- when to processes are blocked on each other, this is called a _deadlock_

### Swapping
- blocked processes can be "swapped" out of main memory in order not to waste memory space

## Handling I/O
Problems can occur when different resources communicate through I/O (inputs & ouputs), because they usually operate at different speeds. For instance, the CPU usually works magnitudes faster than a hard drive or network resource will require to respond to some I/O request. It is therefore important that the CPU doesn't waste time by waiting for an I/O response. In order to avoid this, usually **buffers** are used, which allow the CPU to queue up a meaningful amount of data to communicate (both in and out) before processing them.
### Blocked on I/O
If a process is blocked by waiting for an I/O response, the CPU sometimes **swaps it out** of memory to get on with other tasks.
In order to resume the swapped out process, the CPU can either keep **polling** or receive an **interrupt**

As mentioned before, polling keeps asking I/O for a response, while an interrupt comes from the I/O. Interrupts can be either from the software side or directly hardware bound.

<table class="table table-bordered">
	<tr>
		<th></th>
		<th>Interrupts</th>
		<th>Polling</th>
	</tr>
	<tr>
		<td>Pros</td>
		<td><ul>
	<li>Save CPU time because it doesn't have to keep checking</li>
</ul></td>
		<td><ul>
	<li>Easy to implement, because no special hardware is required</li>
	<li>Give CPU more control over what it does</li>
</ul></td>
	</tr>
	<tr>
		<td>Cons</td>
		<td><ul>
	<li>Too many interrupts slow the CPU down</li>
</ul></td>
		<td><ul>
	<li>Polling wastes CPU time</li>
</ul></td>
	</tr>
</table>

**Verdict:** Almost all hardware devices use interrupts where possible.
### Direct Memory Access (DMA)
This is a more recent alternative to polling and interrupts. This method bypasses the CPU, so that data from the I/O are directly passed to the RAM by a dedicated DMA controller. This approach still uses interrupts, but only once the data transfer is finished, so that CPU time is saved.
