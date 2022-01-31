# ROKU controller in React Native

This repo contains the complete JavaScript code to control the Roku. 

The Roku Extern Control Protocol (ECP) is a simple RestAPI and is described on [this page](https://developer.roku.com/en-gb/docs/developer-program/debugging/external-control-api.md):

I wrote this application for myself since I was always loosing the Roku remote control. 

There is no platform specific code in this application, hence it should work out-of-the-box on iOS. I have tested it on my Android phone and it works absolutely fine.

One caveat is that the application does not support discovery of the Roku. This is because JavaScript does not support Multicast trafic. It can be done in Java/Swift, but frankly, I am tied up with other things. If you come up with a solution, do let me know!

To find the Roku on your network, you will have to go to your Router's admin page and check the IP address. The port will almost always be 8060.

Most of the business is in RokuContext.js.

Major TODO's:

- Add feature to save the IP if it is changed.
- better yet, add Simple Service Discovery on the native side. 
- add a search button

Bugs, enhancements, criticism of the code is welcome.  