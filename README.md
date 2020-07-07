# WebdriverIO_project

The project is a basic automation set up to test "https://marksandspicy.com/" and has been done using Webdriverio and Mocha framework. The complete project is developed on ES6 standards with babel config. Babel config is required for maintaining ES6 standards for node versions <13.

# Project Structure: 
The project is structured using Page object model with seperate folders for page elements, test cases and test data. 
 ## site.pages : 
 Contains the page files with elements and methods to operate on the webpage.
 
 ## site.test :
 Contains the individual test cases which can access the page elements by importing them.
 
 ## TestData :
 Contains the data files for the test scripts in JSON format. 
 
 ## package.json : 
 Contains the dependencies to execute the project . All the dependencies has been put into devDependencies for easy installation and execution on another system.
 
 ## wdio.conf.js :
 This is the basic configuration file for the project which includes all the configuration related data. 

![github upload](https://user-images.githubusercontent.com/50337059/86777099-60260600-c076-11ea-982c-c8c19b4bfc3b.PNG)


# Installation and Set up 
   ## Steps :
   1. Clone the repositary by using the following command : $ git clone https://github.com/AishRS/WebdriverIO_project.git on VSC Terminal . 
   2. Once done, the project will be set up on the VSC workspace. Install the dependencies on the package.json by using " npm install" on the terminal. 
   3. The node - modules will now be installed on the system. 
   4. For quick execution, all the paths in wdio.conf.js are all relative.  The runner runs on localhost on port '4444' .
  
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/' 
    
  # Execution of test cases 
  
  Use the following command to execute the test case from terminal.
          npm test -- --spec ./site.test/TestCaseName.js
          
  # Data- Driven Framework
  
  TestData folder has the JSON files which provides data to the test cases. 
          
  # Reporting  
  
  The project has been customized to generate allure reports. After every run, the test data for the report will be saved under allure-results folder and the Screenshots are saved under Reports/Screenshots. 
  
  To generate a report , run the following , 
  1. allure generate allure-results --clean
  2. allure-open .
  The report will be generated on a web server. 
  
  
  
  
  
