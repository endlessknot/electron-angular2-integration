# electron-angular2-integration
A lightweight example project that demonstrates the integration of Electron's APIs into Angular2 Components.

## Intention
There are several examples available on the internet that demonstrate the basic integration of Electron and Angular2. However, I found none that demonstrated calling Electron's API calls (such as `dialog`) from within ng2 code (like in a `Component`) and was lightweight enough to serve me as a starting point, so I put up this project to make the process easier for others.  Common pitfalls are mentioned and adressed in the source comments.


The project based on [generator-electron-angular2](https://www.npmjs.com/package/generator-electron-angular2).

## Structure
The project not only serves as an example but also as a boilerplate template for starting new Electron/Angular2 apps. For this reason,
the project is kept as simple as possible (no Sass, Jade, etc.) while still providing a useful template. It is mostly self-contained, all you need is `node` and `npm`.

A [shrinkwrapped](https://docs.npmjs.com/cli/shrinkwrap) version of the node package is included to protect against breaking changes in future ng2/Electron updates.

## Setup
#### Installation
Install the node modules:

>`npm install`

Install the typescript declaration files:

>`typings install`

#### Build
Build the project with
>`grunt`

#### Run
Start Electron from the project root using either your globally installed Electron or by using the one include in the node modules.
How to start the latter depends on your operating system - on Windows you would call:
 >`node_modules/electron-prebuilt/dist/electron.exe .`  

## Bugs & Submissions
Feel free to contribute!
