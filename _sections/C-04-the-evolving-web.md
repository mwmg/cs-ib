---
layout: section
topic: C
title: C.4 The evolving web
description: Use of cloud computing and issues concerning privacy, intellectual property and more.
comments: true
excerpt_separator: <!-- more -->
---
<!-- more -->

## C.4.1 Discuss how the web has supported new methods of online interaction such as social networking
### Technologies
The following are a few technologies often considered to play an important role for the development of the Web 2.0:
- Flash, Silverlight and recently HTML5 allow the use of embedded multimedia, such as video and audio
- Ajax allows asynchronous communication with the server using JavaScript, which means that new information can be downloaded/uploaded without reloading the web. This allows for more dynamic websites
- XML and similar formats such as JSON provide standard formats for exchanging data between the client and server, e.g. with Ajax. These formats are usually supported by various programming languages. This allows the same data to be read by client side scripts (i.e. in JavaScript) and server side scripts (e.g. in PHP, Ruby or Python).
- RSS feeds allow regular content update notifications.

### Features
These technologies make it possible to implement new features, some of which are described by the acronym SLATES:
- Search: ability to find information through keyword searches
- Links: linking to other websites for connecting different information sources
- Authoring: ability to create and update content, e.g. through a Wiki or comment system
- Tags: categorization of content through tags
- Extensions: that allow online applications on the web, e.g. [Adobe Reader](https://en.wikipedia.org/wiki/Adobe_Acrobat), [Adobe Flash](https://en.wikipedia.org/wiki/Adobe_Flash) or [Microsoft Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight)
- Signals: technologies such as [RSS](https://en.wikipedia.org/wiki/RSS) to notify user about content changes

In addition, these technologies allow the creation of virtual communities, interaction between users and collaboration. Platforms based on these principles include social media, online shopping (e.g. Ebay), Wikis and blogging platforms.

## C.4.2 Describe how cloud computing is different from a client-server architecture
It's worth noting that this comparison is not about two opposites. Both concepts do not exclude each other and can complement one another.
### Client-server architecture
An application gets split into the client side and server-side. The server can be a central communicator between clients (e.g. email/chat server) or allow different clients to access and manipulate data in a database. A client-server application does also not necessarily need to be working over the internet, but could be limited to a local network, e.g. for enterprise applications.

### Cloud computing	
[Cloud computing](http://searchcloudcomputing.techtarget.com/definition/cloud-computing) still relies on the client-server architecture, but puts the focus on sharing computing resources over the internet. Cloud applications are often offered as a service to individuals and companies - this way companies don't have to build and maintain their own computing infrastructure in house. Benefits of cloud computing include:
- Elasticity: cloud applications can scale up or down depending on current demands. This allows a better use of resources and reduces the need for companies to make large investments in a local infrastructure.
- Pay per use: elasticity allows the user to only pay for the resources that they actually use.
- Self-provisioning: allows the user to set up applications in the cloud without the intervention of the cloud provider

## C.4.3 Discuss the effects of the use of cloud computing for specified organizations
There is different models for deploying a cloud computing service and they affect organizations in different ways.
### Private cloud
In a private cloud model a company owns the data centers that deliver the services to internal users only.

<table class="table table-bordered">
	<tr>
		<th>Advantages</th>
		<th>Disadvantages</th>
	</tr>
	<tr>
		<td>
		<ul>
			<li>Scalability</li>
			<li>Self-provisioning</li>
			<li>Direct control</li>
			<li>Changing computer resources on demand</li>
			<li>Limited access through firewalls improves security</li>
		</ul>
		</td>
		<td>
			<li>Same high costs for maintenance, staffing, management</li>
			<li>Additional costs for cloud software</li>
		</td>
	</tr>
</table>
### Public cloud
In a public cloud services are provided by a third party and are usually available to the general public over the Internet.

<table class="table table-bordered">
	<tr>
		<th>Advantages</th>
		<th>Disadvantages</th>
	</tr>
	<tr>
		<td>
		<ul>
			<li>Easy and inexpensive because the provider covers hardware, application and bandwidth costs</li>
			<li>Scalability to meet needs</li>
			<li>No wasted resources</li>
			<li>Costs calculated by resource consumption only</li>
		</ul>
		</td>
		<td>
			<li>No control over sensitive data</li>
			<li>Security risks</li>
		</td>
	</tr>
</table>

### Hybrid cloud
The idea of a hybrid cloud is to use the best of both private and public clouds by combining both. Sensitive and critical applications run in a private cloud, while the public cloud is used for applications that require high scalability on demand. As [TechTarget](http://searchcloudcomputing.techtarget.com/definition/cloud-computing) explains, the goal of a hybrid cloud is to "create a unified, automated, scalable environment that takes advantage of all that a public cloud infrastructure can provide while still maintaining control over mission-critical data".

## C.4.4 Discuss the management of issues such as copyright and intellectual property on the web
As information becomes publicly available on the web, it is important to specify how this information can be used. The most standard way to protect intellectual property is through specifying copyright.

However, as sharing information becomes more important, there are various licenses available.

### Non-software
Creative Commons License
* CC 4.0
* CC 4.0 Share Alike
* CC 4.0 non-commercial
* and more... check out the [official website of CC](https://creativecommons.org/licenses/)

### Software
* MIT Licence
* Apache License 2.0
* GNU GPLv3
* check out [choosealicense.com](https://choosealicense.com/)

## C.4.5 Describe the interrelationship between privacy, identification and authentication
### Privacy
Defined as the seclusion of information from others. In the context of the web this can relate to healthcare record, sensitive data from financial institutions, residential/geographic records, criminal justice investigations/proceedings. For such information it is essential to prevent unauthorized access.
### Identification
Defined as the process of claiming to be one's identity. This process is important for privacy and is required for authentication.
### Authentication
Process of proving/confirming one's identification. Most usually done through a username-password combination, but other methods such as two-factor authentication become more and more prominent on the web. A common form of two-factor authentication requires the user to enter a code received by SMS in addition to the conventional password.

## C.4.6 Describe the role of network architecture, protocols and standards in the future development of the web
The future development of the web can only be guessed, but linking to topic [C.6](/sections/C-06-the-intelligent-web.html) one trend is to make data more meaningful in order to create a _semantic web_. This will certainly require some new standards, but the ideal is that established network architectures, protocols and standards can still be used. It is therefore important for these to be secure enough, to be extensible and scalable. Scalability is also important as the web grows and cloud applications are deployed on very large scales. As new web applications emerge and more sensitive data are handled, security also plays a very important role. The transition from SSL to TLS is a good example of how some protocols will probably need to be replaced by newer ones - be it because of security flaws or because design restrictions.

## C.4.7 Explain why the web may be creating unregulated monopolies
In theory the world wide web should be a free place where anybody can have a website. However, hosting a website usually comes with a cost - registering a domain name, getting a hosting service or investing in servers oneself, creating and maintaining the website (requires technical knowledge or the cost of hiring a web developer). In addition, to reach an audience further marketing through SEO (see [C.2](/sections/C-02-search-the-web.html)) is usually necessary to get good rankings in search engine results. This means that for the normal individual a traditional website is not the best option. A better alternative is to publish content on an existing platform, e.g. micro blogging on Twitter, blogging on Wordpress or Blogspot, sharing social updates on Facebook, sharing photos on Flickr, etc. . This comes with improved comfort for users.

However, it easily leads to unregulated monopolies in the market because users usually stick to one platform. Tim Berners-Lee describes today's social networks as centralized silos, which hold all user information in one place. This can be a problem, as such monopolies usually control a large quantity of personal information which could be misused commercially or stolen by hackers. There are certainly many more concerns which won't fit into the scope of this site.

## C.4.8 Discuss the effects of a decentralized and democratic web

<table class="table table-bordered">
	<tr>
		<th>Benefits</th>
		<th>Issues</th>
	</tr>
	<tr>
		<td>
			<ul>
				<li>More control over data: possible improved privacy</li>
				<li>Making surveillance harder</li>
				<li>Avoid censorship</li>
				<li>Possibly faster speeds, e.g. BitTorrent</li>
			</ul>
		</td>
		<td>
			<ul>
				<li>Barrier to usability: difficult for non-technical users to host their content</li>
				<li>Less practical sometimes</li>
				<li>DNS alternatives necessary for legible domain names: see BitTorrent links as an example</li>
				<li>Higher maintenance costs</li>
			</ul>
		</td>
	</tr>
</table>
