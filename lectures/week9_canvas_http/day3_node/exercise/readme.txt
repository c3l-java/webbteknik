Node module

In this exercise you will create a new node module that will add stuff togethor.


1) Create a new folder on your system with the name addStuff.

2) In terminal cd into the folder you have just created.

3) An installable node module requires a package.json file. Create one from terminal by running 'npm init'.

4) Open sublime with the 'subl .'

5) Create an index.js file in sublime and save it in to your projects folder.

6) Create a variable called currentNumber with a value of 10.

7) Create a function called addder that takes a single parameter. The function should add the number given to it to currentNumber and return the result.

8) Use module.exports to expose the function.


Testing

1) In sublime create a new file called tests.js

2) Create a new variable called addStuff and readin your index.js file using the require function.
var addStuff = require("./index.js");

addStuff should now be an object with a property adder that is the function defined that we wrote earlier.

3) To start with we will use console to visually test our code. Write
    console.log(addStuff.adder(20)); // The result of this should be 30 as 
    console.log(addStuff.adder(49)); // The result of this should be 79

4) Run the test by opening terminal and typing "node test.js"

5) If you get the correct result continue now we will do a proper unit test using a module called nodeunit.

6) Create a folder in your addStuff folder with the name node_modules

7) In terminal make sure you are in the addStuff folder and then install the unit testing framework nodeunit, to do this we type 'npm install nodeunit'

8) Have a look at the documentation for nodeunit on github, we will be using it to write what we call a unit test. A unit test is a piece of code that tests that another piece of code is working propperly.

https://github.com/caolan/nodeunit

9) Use the documentation for node unit to see if you can write a test function called adder that will make sure that addStuff.adder() is working properly.

10) Test your function from the terminal by typing "nodeunit test.js"

11) If your function works you will see a tick in terminal.

12) Verify that it really is working properly by changing one of the tests to make your test fail. Run "nodeunit test.js" again and ensure that it now fails.



Using your module in another project

1) Create a new folder on your desktop called myProject.

2) cd into myProject in terminal.

3) Make a folder to hold our modules called node_modules.

4) In terminal type "npm install path-to-addStuff-folder" change path-to-addStuffFolder to be the correct path to your module created in the first step.

5) Open sublime with "subl ."

6) Click on the node_modules folder and ensure that addStuff has been copied in.

7) Create a file in myProject folder called index.js

8) Load in addStuff module with the following command.
    var addStuff = require("addStuff");
    console.log(addStuff.adder(20)); // The result of this should be 30 as 
    console.log(addStuff.adder(49)); // The result of this should be 79

9) Run the index.js file from the terminal with node.






