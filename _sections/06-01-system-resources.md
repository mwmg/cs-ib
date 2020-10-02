---
layout: section
topic: 06
title: System resources
comments: true
description: This section looks at what resources are necessary in a computer system and how this might differ between different computer systems. Furthermore, possible limitations and problems arising from resource management are discussed.
excerpt_separator: <!-- more -->
---
<!-- more -->
## Common resources of a computer system
<table class="table table-bordered">
	<tr>
		<th>Resource [Category]</th>
		<th>Purpose/Usage</th>
		<th>Limitations</th>
	</tr>
	<tr>
		<td>ROM [Primary storage]</td>
		<td>Read-only. Stores the program, which will be first executed when the machine is switched on (usually the BIOS/UEFI).</td>
		<td>Cannot be changed after being written/slow to update. Problem if there is a bug in the firmware.</td>
	</tr>
	<tr>
		<td>RAM [primary storage]</td>
		<td>Memory where programs are stored during run-time. CPU accesses instructions from here.</td>
		<td>Volatile storage, so that data are lost when the computer is shut down. This can be a problem during a power outage. Memory space limits the amount of applications that can run at a time. For instance if there’s not enough memory available for the programs running, these may start to behave unexpectedly or not smooth (fortunately we have virtual memory and SWAP partitions).</td>
	</tr>
	<tr>
		<td>Processor</td>
		<td>The CPU processes the stored instructions of a program. It has internal resources itself, which are the Registers, the control unit and the actual ALU, which together are able to process the instructions.</td>
		<td>Can only do one instruction at a time. Clock speed defines how fast instructions are done. Voltage and thermal emission (TDP) limit clock speeds.</td>
	</tr>
	<tr>
		<td>Bandwidth [I/O]</td>
		<td>Manages the flow of data and its speed. Can be from CPU to storage(e.g. SATA) or network connectivity(e.g. LAN)</td>
		<td>Data need to flow from one component to another. Low bandwidth can slow down the whole system, even if other components work fast.</td>
	</tr>
	<tr>
		<td>Screen resolution [Output]</td>
		<td>How many pixels as screen has in each dimension.</td>
		<td>Limits how much information can be displayed on a screen. Lower resolution can limit multitasking and productivity. On the other hand, higher resolutions require increased graphic processing and can decrease overall system performance, e.g. lower frame rates. Another factor is screen size.</td>
	</tr>
	<tr>
		<td>Disk storage [Secondary storage]</td>
		<td>General storage for storing software</td>
		<td>Limiting factors are storage capacity, access times and data transfer rates for both writing and reading from the disk.</td>
	</tr>
	<tr>
		<td>Sound processor</td>
		<td>Processing digital audio data in order to deliver them to analog speakers.</td>
		<td>Limitations on the range of standards supported (e.g. analog stereo jack, optical audio, surround) by both the processor and speaker.</td>
	</tr>
	<tr>
		<td>Graphic processor</td>
		<td>Processing and managing digital signals in order to control pixels on screen so that a we get a visual display.</td>
		<td>Limitations due to output standards(e.g. VGA, HDMI, DVI), processing power limiting frame rates and screen resolution.</td>
	</tr>
	<tr>
		<td>Cache [Primary storage]</td>
		<td>Stores results from earlier computations, so that future requests for the same data can be served faster.</td>
		<td>Data stored in the cache may not be used for future requests, ending up as inefficient use of the cache memory. The other way round, repeatedly accessed data may not necessarily be stored in the cache.</td>
	</tr>
	<tr>
		<td>Network connectivity [I/O]</td>
		<td>Sending/Receiving data from other computers and manage the data flow.</td>
		<td>Again different standards may lead to limitations, specially concerning Wi-Fi (types 802.11b/g/a/n/ac).
		Wi-Fi brings other limitations as range and throughput.</td>
	</tr>
</table>

It is always important to consider these resources working together, as often one single resource can act as the bottleneck for the rest of the system.
