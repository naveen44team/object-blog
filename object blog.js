// day 1 task
//  object is a standalone entity, with properties and type. Compare it with a cup, for example.
// -> A cup is an object, with properties.
//  ->A cup has a color, a design, weight, a material it is made of, etc.


// "A JavaScript object is a collection of named values having state and behavior (properties and method)".
// For example: Person, car, pen, bike, Personal Computer , Washing Machine etc.
// Take the case of cars.
// All cars have the same properties, but the property values differ from car to car.
//  All cars have the same methods, but the methods are performed at different times.


/*  Let’s have an example of my favorite mercedes car and list out its properties:

Make: Mercedes 
Model: C-Class
Color: White
Fuel: Diesel
Weight: 850kg
Mileage: 8Kmpl
Rating: 4.5


1)Objects:
The following code assigns a simple value (Mercedes) to a variable named car:

var car = "Mercedes";
Objects are variables too. But objects can contain many values.

The following code assigns many values (Mercedes, C-class, White and soo on) to a variable named Car:

var car = {Make: "Mercedes", Model: "C-Class", Color: "White", Fuel: "Diesel", Weight: "850kg", Mileage: "8Kmpl", Rating: "4.5"};
The values are written as name:value pairs (name and value separated by a colon).

Syntax:

var <object-name> = {key1: value1, key2: value2,... keyN: valueN};
So, conclusion and definition for JS objects is "JavaScript objects are containers for named values".

2)Object Properties
The name:values pairs (in JavaScript objects) are called properties.

var car = {Make: "Mercedes", Model: "C-Class", Color: "White", Fuel: "Diesel", Weight: "850kg",Mileage: "8Kmpl", Rating: "4.5"};

Properties can usually be changed, added, and deleted, but some are read only.

The syntax for adding a property to an object is :

ObjectName.ObjectProperty = propertyValue;
The syntax for deleting a property from an object is:

delete ObjectName.ObjectProperty;
The syntax to access a property from an object is:

objectName.property        // Car.Make

           //or

objectName["property"]    // Car["Make"]

          //or


objectName[expression]   // x = "Make"; Car[x]

3)Object Methods
An object method is an object property containing a function definition.

Let’s assume to start the car there will be a mechanical functionality.

function(){return ignition.on}*/






// task 3 que day 1:

/* What is HTTP?
 Hypertext Transfer Protocol (HTTP) is an application protocol that is, currently, the foundation of data communication for the World Wide Web.
HTTP is based on the Client/Server model. Client/Server model can be explained as two computers, Client (receiver of service) and Server (provider of service) that are communicating via requests and responses.
A simple and abstract example would be a restaurant guest and a waiter. The guest (Client) asks (sends request) waiter (Server) for a meal, then the waiter gets the meal from the restaurant chef (your application logic) and brings the meal to the guest.
This is a very simplistic example, but it is also the one that will help you understand the concept.
There are many more interesting HTTP concepts and utilities to discuss, but the star of this post is (not enough) famous HTTP/2.


What is HTTP/2?
In 2015, Internet Engineering Task Force (IETF) release HTTP/2, the second major version of the most useful internet protocol, HTTP. It was derived from the earlier experimental SPDY protocol.
Main goals of developing HTTP/2 was:
Protocol negotiation mechanism — protocol electing, eg. HTTP/1.1, HTTP/2 or other.
High-level compatibility with HTTP/1.1 — methods, status codes, URIs and header fields.


Page load speed improvements trough:
>Compression of request headers
>Binary protocol
>HTTP/2 Server Push
>Request multiplexing over a single TCP connection
>Request pipelining
>HOL blocking (Head-of-line) — Package blocking
>Request multiplexing

HTTP/2 can send multiple requests for data in parallel over a single TCP connection. This is the most advanced feature of the HTTP/2 protocol because it allows you to download web files asynchronously from one server. Most modern browsers limit TCP connections to one server.



Binary protocol
The latest HTTP version has evolved significantly in terms of capabilities and attributes such as transforming from a text protocol to a binary protocol. HTTP1.x used to process text commands to complete request-response cycles. HTTP/2 will use binary commands (in 1s and 0s) to execute the same tasks. This attribute eases complications with framing and simplifies implementation of commands that were confusingly intermixed due to commands containing text and optional spaces.
Browsers using HTTP/2 implementation will convert the same text commands into binary before transmitting it over the network.

Benefits:
Low overhead in parsing data — a critical value proposition in HTTP/2 vs HTTP1.
Less prone to errors.
Lighter network footprint.
Effective network resource utilization.
Eliminating security concerns associated with the textual nature of HTTP1.x such as response splitting attacks.
Enables other capabilities of the HTTP/2 including compression, multiplexing, prioritization, flow control and effective handling of TLS.
Compact representation of commands for easier processing and implementation.
Efficient and robust in terms of processing of data between client and server.
Reduced network latency and improved throughput.
HTTP/2 Server Push
This capability allows the server to send additional cacheable information to the client that isn’t requested but is anticipated in future requests. For example, if the client requests for the resource X and it is understood that the resource Y is referenced with the requested file, the server can choose to push Y along with X instead of waiting for an appropriate clients. */
