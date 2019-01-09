# EY-Target-Acquisition
Steps to run this app

1. fork this project from git
2. use any IDE to open the source code
3. Make sure latest version of npm is installed
4. run below command to start the app

  npm run

This will take a while to complete (it install all libraries defined in package.json and run some post install updates). After successful installation of node packages, you will be see a message saying http server is running on localhost@8000.

Open a browser and type http://localhost:8000

To open this site on a public hosted server, please click on below link

https://ey-acquisition-portal-sreeni.herokuapp.com

Implementation Details:

1. I designed the app keeping the modularity, usability and enhancibility in mind
2. I ensured that each of the functionalities were created as a Angular components so that these components can be reused anywhere just by injecting dependency on it. I am particularly proud of this way of design
3. I have modal window/pop-up UI component for allowing users to edit target. This is good from user experience point of view
4. I have depicted Financial Performance of a company graphically. I have provided users to navigate to a pop-up window which has graphical representation(bar-chart) of financial performance of a company. I am proud of having a nice view upon a user click from a tabular data
5. I have designed a web page layout that has a header, sidebar & main body. I designed this app to be a single app through the usage of router module in angularjs. I am proud of designing this to be a single page app
6. I am particularly proud of having 3 different graphical representations of target list data
7. I am proud of using animations(transitions) and EY color palettes. Moreover have managed to write few unit test cases
