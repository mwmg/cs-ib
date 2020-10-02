---
layout: section
topic: 06
title: OS abstraction layers & embedded systems
comments: true
description: This section looks at how the OS hides complexities of a system from the user. Embedded systems and advantages of a dedicated OS are also discussed.
excerpt_separator: <!-- more -->
---
<!-- more -->

## Further OS virtualization
**Virtualization** is the process of making the interface to different types of hardware or software seem uniform, thereby simplifying its use.

Examples include:
- virtual memory: program's data could come from cache, RAM, disk or even network, but for the program this is all the same
- storage: different drives are treated the same in the directory structure, no matter if HDD, SDD, network drive, DVD, etc. On Windows drives are assigned letters, while on Unix drives are just included as another directory tree.
- cloud drive: similarly to a network drive, this is usually treated the same as any other drive.
- standard input and output libraries for programs: e.g. _stdin_ / _stdout_ on the command line. Similar libraries for GUI, depending on the OS. Also consider printing as an output.
- Java Virtual Machine (JVM): another layer between application and hardware. Hides complexities between different operating systems and offers one platform independent environment for programs to be executed. The JVM translates Java specific instructions into OS specific system calls.

## Advantages of dedicated operating systems
A **dedicated operating system** allows the system to be customized for **specific needs and requirements**, which a OS off the shelf may not offer. This is necessary in many cases, for instance, it may supply **more security** where critical information is handled. It is also the case for most **embedded systems**, for example GPS, TVs, MP3s, network routers, thermostats, ATM machines or even microwaves.
A dedicated OS may also make the **most efficient** use of the system as only the necessary parts of the OS are implemented, which reduces its **size** and thus the memory use both primary and secondary. This can reduce the **costs of the hardware** and make the system **faster**, as less resources are needed. This again is a great factor in embedded systems, where the CPU is usually not as powerful as in a desktop and resources therefore need to be managed efficiently. An example would be phones before the smartphone era, where resources where limited so that phone manufacturers would try to make the most out of them by using dedicated operating systems. Resources in this case are not only speed, but also size, as memory is very limited in older phones.
Embedded systems may also need to run **real-time applications**, which again require speed and reliability, which can be offered by a dedicated OS. An example could be a car computer, which processes data from the sensors in real-time in order to react where necessary, for example for electronic stability control (ESC).

Sources: [CompSci 2014 Wikispaces](http://compsci2014.wikispaces.com/6.1.8+Discuss+the+advantages+of+producing+a+dedicated+operating+system+for+a+device.)
