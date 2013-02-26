websocks
========

A web sockets demo. Inspired by Kaazings [Razer](http://demo.kaazing.com/racer/) demo.

Uses node.js, socket.io, and HTML5.

HTML5 is used to read gyroscope data from a mobile device. Data is sent via websockets to a web page that renders a 3D object with WebGL. The 3D object is
rotated over all three axes according to the received gyroscopic data.
