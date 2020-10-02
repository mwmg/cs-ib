---
layout: section
topic: CS2017
title: Diagnosis systems
comments: true
description: This sections looks at different systems used to aid diagnosis and treatment of patients, including DDSS and CDSS. In addition, different technologies used for such systems, for example fuzzy logic, are covered.
excerpt_separator: <!-- more -->
---
## Clinical decision support system (CDSS)
_Helpful reads:_
- TechTarget "Defition of clinical decision support system (CDSS)" \[[1][]\]
- HealthIT.gov "Clinical Decision Support" \[[2][]\]
- UK Essays "Types Of Clinical Decision Support System Computer Science Essay" \[[3][]\]

A clinical decision support system (CDSS) is a system that uses health information to support clinicians to make a variety of clinical decisions. Functionality such systems can provide:
- Diagnosis support
- Clinical guidelines
- Alerts & reminders for patients care
- Contextually relevant reference information
- Patient data reports & summaries

### Types
#### Knowledge-based CDSS
These systems use expert systems that take knowledge from the biomedical literature and store them in form of rules. The system uses IF-THEN-ELSE rules based on patients information, e.g. for diagnosis support or preventing medications that might harm the patient. It is based on a knowledge base and interference engine (mentioned later).

#### Non-knowledge-based CDSS
Other systems use machine learning. These systems learn through past experiences and need to be trained through symptoms and disease relationships. The main types of such systems are artificial neural networks and genetic algorithms.

### Pros & Cons
Most of these are theoretical and often implementations of such systems fail to deliver the full potential of CDSS, e.g. because multiple systems interfere or because the system is not properly used.
#### Pros:
- Potentially increased quality of health care
- Can avoid errors
- Potentially improved efficiency
- Cost-benefits

#### Cons:
- Might require standardized patient information
- Requires clinicians to fully know the capabilities of the system
- Overlapping systems might lower productivity
- Medical knowledge needs to be kept updated while being reliable

## Diagnosis decision support system (DDSS)
_Helpful reads:_
- Miller, Randolph A. "Diagnostic decision support systems." \[[4][]\]

A DDSS is a specific type of CDSS. In order to fully understand how it works, it can be useful to consider the traditional steps of diagnosis.

### What does traditional diagnosis include?
**Diagnosis:** "a mapping from a patient’s data (normal and abnormal history,
physical examination, and laboratory data) to a nosology of disease states" \[[4][]\]

Usually involves:
- patient's history
- physical examination
- compare to plausible known diseases
- evaluate and refine through additional examinations, e.g. laboratory test
- further evaluation through effect of chosen therapy

Highly individual process and different clinicians usually face different problems. A DDSS aims at helping clinicians.

### What does a DDSS do?
**DDSS:** "a computer-based algorithm that assists a clinician with one or more component steps of the diagnostic process" \[[4][]\]

Very important that user expectations match the capabilities of the system. Therefore proper user training is critical, although this might be hard to carry out, do to clinicians often having little spare time. The aim of a DDSS is rarely to replace a clinician, but to support him/her with hard decisions. This way a DDSS usually assists for individual steps of the diagnosis process, rather than doing the diagnosis as a whole. Often, DDSS systems are very specialized, e.g. for a specific type of symptoms such as abdominal pain, and cannot be used for any diagnosis. Clinicians will need to know this in order to use the system efficiently.

### Types of DDSS
There broadly are general purpose systems and highly specialized ones.

Examples of different types of systems:
- interpretation of test results, e.g. blood gas; **"most widely used form"** of DDSS \[[4][]\]
- probabilistic (e.g. Bayesian based) diagnosis, e.g. system for diagnosis of
acute abdominal pain developed by de Dombal and al.
- rule-based systems
- neural networks: over-/undertraining, need for training cases and lack of existing data sets

### Development of clinical systems
Criteria:
- "if it's not broken, don't fix it"
- critical error handling
- demonstrate practical benefit

Issues:
- clinical domain selection: finding the appropriate users and getting clinics to use DDSS
- knowledge-based construction and maintainance: knowledge needs to be kept updated; it's hard to determine when new knowledge is considered to be accepted
- algorithms and user interfaces: very complex systems are often not feasable; smaller specific systems with a single application bring lower benefit and are thus often not bought by clinics; this brings the need for an integrated environment
- testing, evaluation, quality control
- interface and vocabulary: system might not be convenient enough to use
- legal and ethical: approval by legal institutions; responsability involved

### Future of DDSS
- certain future for small specialized systems
- large generic systems have a less certain future

## Inference engine
This part of a CDSS uses knowledge from a database together with patients information in order to generate some output. It controls the actions of the system, e.g. what clinical decision is suggested based on the given data.

## Knowledge base
The knowledge base contains the medical information the interference engine uses. Sources for such a knowledge base can be external sources, such as books, magazines, journal articles and medical databases. For this reason, creating a reliable and updated knowledge base for a CDSS can be a complex task.

## Fuzzy logic
In contrast to boolean logic (1 or 0; true or false), fuzzy logic is a computing approach based on "degrees of truth". This means that instead of only having 0 and 1, truth can have various states in between, e.g. "0.45 true".

This idea resembles human thinking in a way as various partial truths can add up to create stronger truths. This way fuzzy logic can address the problem of uncertainty, e.g. in medical diagnosis. Fuzzy logic creates the basis for AI systems that implement cognitive skills and can therefore be used for CDSS.

## Pattern recognition & data mining
Both pattern recognition and data mining are both connected to artifical intelligence and machine learning, which can be used in non-knowledge-based CDSS. Both fields aim at identifying regularities and patterns in input data. Data mining is usually done using unsupervised learning algorithms, meaning that patterns are not necessarily known. Pattern recognition on the other hand is usually done by using supervised learning algorithms, meaning that the system receives training data first in order to recognize known patterns in future data. Both techniques can be used for CDSS and DDSS.

One recent example use of pattern recognition and neural networks I found really interesting, is a portable device that regularly takes electrocardiograms from users and is able to detect early signs of heart disease, as featured in [this article by Wired](https://www.wired.com/2017/03/alivecor-kardia)
## Medical imagery
Medical imagery includes different techniques used to "image human body for diagnostic and treatment purposes" (WTO). Different techniques are looked at in more detail in its respective setion.

---

_Sources:_

\[1\] [TechTarget "Defition of clinical decision support system (CDSS)"][1]

\[2\] [HealthIT.gov "Clinical Decision Support"][2]

\[3\] [UK Essays "Types Of Clinical Decision Support System Computer Science Essay"][3]

\[4\] [Miller, Randolph A. "Diagnostic decision support systems." Clinical decision support systems. Springer International Publishing, 2016. 181-208.][4]

[1]: http://searchhealthit.techtarget.com/definition/clinical-decision-support-system-CDSS
[2]: https://www.healthit.gov/policy-researchers-implementers/clinical-decision-support-cds
[3]: https://www.ukessays.com/essays/computer-science/types-of-clinical-decision-support-system-computer-science-essay.php
[4]: http://eknygos.lsmuni.lt/springer/583/99-125.pdf
