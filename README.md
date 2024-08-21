# JavaScript Camera (Web3 version)

Original README:

Example code showing how to access device cameras via JavaScript (no external libraries needed)

See the post: https://www.webdevdrops.com/en/how-to-access-device-cameras-with-javascript/

--------------------------------------------------------------------

This is a wonderful little bit of code. In just two files, it contacts your camera and allows 
for screenshots. The purpose of this fork is to essentially reduce the HTML part of the code to
almost nothing. By rendering everything as Javascript, the code can then be called on the fly from 
a public blockchain record (EVM cryptocurrency transaction). Therefore we can build toward a 
simple "stub" or "boot up" code that is simply passed the string "camera" and it pulls down all 
of the javascript, evaluates ( eval() ) the code into the current environment, and executes it from
there. This builds towards a solution which reduces the need for individual coders to find a 
server (probably NodeJS or some service) and install the code. 

A system of rewards can also be installed where both the original coder and any contributors get paid
whenever a donation is made.
