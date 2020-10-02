---
layout: section
topic: 07
title: Control systems overview
comments: true
description: In this section a range of examples for control systems are explained. Furthermore, different sensors, actuators and feedback loops are discussed.
excerpt_separator: <!-- more -->
---
<!-- more -->
## What is a control system?
A control system is a type of computer system that manages, commands and directs other devices or systems. There are open and closed loop control systems.
They usually take an input, process it and get an output.

## Examples
### Traffic Light
In a simple traffic light the input is a timer, which decides what lights are turned on.
More complicated versions sometimes include induction sensors detecting the metal of the cars moving on the street. This allows for more dynamic timing, so that for example pedestrians don't have to wait when there are no cars.
Another use of such sensors is to control traffic lights for emergency situations, e.g. to turn green when firetrucks depart from their central.

### GPS
The Global Positioning System (GPS) is a satellite-based navigation system made up of a network of 24 satellites placed into orbit.
The position of a user is calculated by measuring the distance to three/four satellites, taking the point of intersection in a process called trilateration. In order for this to work, each satellite carries an atomic clock so that the distance between the GPS receiver and the GPS satellite can be calculated through exact time differences.
 
### Automatic doors
Automatic doors consist of a sensor that constantly checks if a person is in front of the door. If there is, an actuator, which in this case usually is a motor, opens the door.
Sensors can be motion or pressure based.

### Heating systems
The control system compares the actual state(e.g. temperature) with the target state and then takes necessary actions.
The control system is also programmable and might include time schedules, setpoints, controllers, logic, timers, trend logs, and alarms.

### Taxi meter
A taxi meter calculates the passenger fare in taxis usually based on waiting time and distance travelled.

### Elevator
The control system in an elevator takes inputs from the various buttons (direction, floor, hold door), and position sensors and gives different outputs.
Outputs are the display of the current floor, direction and control of the door and motors that lift the car up or down.

### Washing machine
The microcontrollers in a washing machine just get inputs from the user ( by pressing buttons/switches) about how long it washes, the washing temperature and speed and then brings this into action, by controlling motors, etc. In addition it offers predefined programs for washing.

### Process control
A control system that is in charge of keeping a specific process' output within a desired range. It usually takes different inputs for this. 
Process control is used in the industry allowing mass production of consistent products like chemicals, paper production, oil refining, power plants and other. Process control also enables automation, requiring less staff. 
Control is usually based on feedback loops.

### Device drivers
A device driver is an interface between the Operating System and a hardware device. 
Inputs are calls by a program. The driver then translates this for the device and gets data back.These driver then presents these data to the program.

### Cleaning robot
Infrared sensors can detect objects in front of it. If the robot senses an object it processes these data and moves away in a different direction. It has a specific algorithm each time it receives something from the sensors.

## Sensor types
The following are some sensors with explanation and example uses:
- **Heat**: measures temperature, e.g. central heating, fire alarm
- **Humidity**: measures water vapour in the air, e.g. greenhouses, swimming pool halls
- **Infra-red**: measures radiation, e.g. security alarm systems
- **Light**: brightness, e.g. security lights
- **pH**: acidity levels, e.g. environmental monitoring
- **Pressure**: force applied on the sensor, e.g. automatic doors, alarm systems
- **Smoke**: particles in the air, e.g. fire alarm
- **Sound**: sound pressure level, e.g. noise pollution monitoring, voice controlled systems, alarm systems
- **Tilt**: angle of tilt, e.g. aircrafts, alarm systems installed in windows
- **Touch**: more sensitive than pressure/detects contact, e.g. robots

## Actuator types
Actuators give a system an output form. A few examples include:
- **LED/light bulb**: creates light, e.g. display of information
- **Heater**: increases temperature, e.g. central heating
- Cooling unit: decreases temperature, e.g. central heating, AC
- **Motor**: spins things around, e.g. robots, washing machines, elevator
- **Pump**: pushes air/water through pipes, e.g water cleaning system, process control
- **Buzzer/bell/siren**: creates (loud) noises, e.g. fire alarm

## Feedback loops
Control systems can be open loop or closed loop.

**Open loop** systems will just consider the input and then keep repeating the same task given the input, e.g. a microwave heats for a given time period without actually checking the temperature of the food.

**Closed loop** systems on the other hand will also take into account other factors, including the output itself. For example a water tank control system that keeps water levels constant will constantly adjust its output (opening or closing a valve) depending on the input it gets from water level sensors.
## Autonomous Agents
These are just automated systems. Examples include Google's search engine crawler, NASA autonomous remote agents for assuring health of spacecrafts, Apple's Siri, or recommendation systems.
