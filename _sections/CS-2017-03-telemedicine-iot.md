---
layout: section
topic: CS2017
title: Telemedicine and Internet of health things
comments: true
description: This sections looks at telemedicine and the internet of health things (IoHT). Major concepts are telesurgery and the use of NFC and RFID for the IoHT.
excerpt_separator: <!-- more -->
---

## Telemedicine
_Helpful Reads:_
- eVisit.com "Telemedicine Guide" \[[1][]\]
- TechTarget HealthIT "Defintion - Telemedicine" \[[2][]\]
- The Wallstreet Journal "How Telemedicine Is Transforming Health Care" \[[3][]\]

Telemedicine makes use of information communication technologies (ICT) to provide clinical support for patients, overcoming geographical barriers. It allows healthcare providers to evaluate, diagnose and treat patients over distance.

### Types of telemedicine
Broadly, telemedicine is categorized into _remote monitoring_, _store-and-forward_ and _interactive_ services.

**Remote monitoring** allows healthcare providers to track a patients health data remotely in order to identify increased health-risks. For example, health data can be used to monitor patients recovering form recent surgeries or to regularly check patients with chronic diseases such as diabetes. The development of cheap wearables makes this form of telemedicine increasingly available.

**Store-and-forward**, also called asynchronous telemedicine, are systems where communications does not necessarily take place at the same time. Such solutions usually allow healthcare providers at one location to forward and share medical data with providers at a different location. This specially useful for services between healthcare providers, e.g. for small hospitals to outsource services to specialists somewhere else.

**Interactive telemedicine** allows patients and health professionals to interact live over video chat. This could take place at the patients home or at a nearby medical facility.

Apart from this, some general applications are:
- Telenursing: provision of nursing services over distance
- Teleradiology: transmission of radiographic images (x-rays, MRI, CT,US, etc.) most often over the internet. Important for consulting specialists
- Telepharmacy: drug therapy monitoring, pharmacist consultation
- Telerehabilitation: mostly focused on highly visual therapies, especially neuropsychology
- Telecardiology: transmission of electrocardiographs
- Telepsychiatry
- Teledermatology
- Telepathology: pathology is the study of diseases and transmission of data such as microscopic images facilitates this at distance

### Pros and Cons
**Pros:**
- Increased access for patients in rural areas
- Convenience for patients
- Reduced cancellations for healthcare providers due to convenience
- Increased access to specialist consultations
- Can save healthcare costs


**Cons:**
- In most places, medication cannot be prescribed without further physical examination
- Technical training and equipment
- Licensing issues
- Quality of service might deteriorate
- No in-person interaction

## Telesurgery
Telesurgery, also called remote surgery, is the idea of performing a surgery at distance. This way a more experienced surgeon could treat the patient, when the local surgeon has little experience. The surgery is performed by a specialized robot which is controlled by the surgeon at distance.

Factors to consider include a stable and fast connection (internet or separate communication line), low latencies and the complexity of the surgery. The benefits include the accuracy of robots, robots being less intrusive and most importantly the expertise of highly specialised surgeons. However, such surgeries still require backup surgeons and the technical systems involve a high cost. Additionally, clinical regulations and compatibility between systems provide further difficulties.

Historically, there has been a successful transatlantic remote surgery in 2001 by a surgeon located in New York on a patient in Strasbourg, France, known as the Lindbergh operation. There has been some further telesurgeries taking place in Canada over a distance of 400km. (Wikipedia)

In the future, the robots involved in telesurgery might be controlled through trained AIs with the possibility of increasing the accessibility to surgeries. Telesurgery systems could also be used to treat wounded soldiers on battlefields or to provide necessary services for long space exploration missions.

## Internet of health things (IoHT)
_Helpful reads:_
- TechTarget - IoT Agenda "Defition: IoMT (Internet of Medical Things) or healthcare IoT" \[[4][]\]
- TechTarget - SearchHealthIT "A guide to healthcare IoT possibilities and obstacles" \[[5][]\]
- TechNewsWorld "The Internet of Medical Things, Part 1: A New Concept in Healthcare" \[[6][]\]
- techradar.com "How the Internet of Things will revolutionise medicine" \[[7][]\]
- IEEE Xplore "The Internet of Things for Health Care: A Comprehensive Survey" \[[8][]\]

The Internet of health things (IoHT), also Internet of medical things (IoMT) or healthcare IoT is "the collection of medical devices and applications that connect to healthcare IT systems through online computer networks."\[[4][]\]

Data from devices are usually made available in the cloud for clinicians to analyze them at distance. For this reason, analytics are as important for IoHT as mobile devices themselves.

### Applications
- Remote patient monitoring
- Real-time location systems (RTLS): used to track patients in hospitals or to locate equipment
- Wearable health devices: can measure different things such as blood pressure, blood sugar levels, body temperature, oxygen saturation, electrocardiograms, etc.
- Smart sensors in hospital beds and other medical equipment: automated measurements of patients can save nurse's work

### Pros & Cons
**Pros:**
- Increased data can lead to deeper insights
- Increased availability of health care (in conjunction with telemedicine)
- Specially useful for patients with chronical diseases or seniors, who benefit from continuous monitoring

**Cons:**
- Data overload: devices need to present data to clinicians in a useful manner
- Data need to be used by clinicians
- Data security: sensible data that need to be secured and also important medical devices, such as infusion pumps, that critically require security against hacking.
- Standards and protocols for compatibility

### Security requirements & challenges
- Data require confidentiality, integrity, authentication
- Data need to be up to date and available
- Devices need to be fault tolerant, i.e. handle errors, and self-healing
- Devices need to be mobile
- Scalability of networks and security systems
- Computational, memory and energy limitations of devices

## Near field communication (NFC)
NFC is a short range wireless communication protocol that allows two devices two establish a peer-to-peer (P2P) network to exchange data. The maximum communication range is 4cm. This way NFC provides a convenient way of communicating data by simply touching two devices, which in the context of IoHT provides easy linking between two devices.

## Radio-frequency identification (RFID)
RFID is used to identify objects, animals, or persons through the use of electromagnetic communication. RFID works with passive transponders (the tags that identify objects) and a reader that includes a transceiver and antenna. The reader sends a radio frequency wave signal which activates the transponder which then responds to identify itself. Most RFID systems work with low-frequencies and short transmission ranges.

In the context of IoHT, this can be used to identify and track medical devices or medications.

---

_Sources:_

\[1\] [eVisit.com "Telemedicine Guide"][1]

\[2\] [TechTarget HealthIT "Defintion - Telemedicine"][2]

\[3\] [The Wallstreet Journal "How Telemedicine Is Transforming Health Care"][3]

\[4\] [TechTarget - IoT Agenda "Defition: IoMT (Internet of Medical Things) or healthcare IoT"][4]

\[5\] [TechTarget - SearchHealthIT "A guide to healthcare IoT possibilities and obstacles"][5]

\[6\] [TechNewsWorld "The Internet of Medical Things, Part 1: A New Concept in Healthcare"][6]

\[7\] [techradar.com "How the Internet of Things will revolutionise medicine"][7]

\[8\] [IEEE Xplore "The Internet of Things for Health Care: A Comprehensive Survey"][8]

[1]: https://evisit.com/what-is-telemedicine/
[2]: http://searchhealthit.techtarget.com/definition/telemedicine
[3]: https://www.wsj.com/articles/how-telemedicine-is-transforming-health-care-1466993402
[4]: http://internetofthingsagenda.techtarget.com/definition/IoMT-Internet-of-Medical-Things
[5]: http://searchhealthit.techtarget.com/essentialguide/A-guide-to-healthcare-IoT-possibilities-and-obstacles
[6]: http://www.technewsworld.com/story/83654.html
[7]: http://www.techradar.com/news/world-of-tech/future-tech/how-the-internet-of-things-will-revolutionise-medicine-1303066
[8]: http://ieeexplore.ieee.org/document/7113786/
