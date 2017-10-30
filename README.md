# Node and Webpack

## Installation
 *Download node js:*
 
 [click here](https://nodejs.org/en/download/)
 
 This project will use node v8.6.0 (npm 5.3.0). Please ensure that you install the correct version for this project to avoid any issues with the node api.

 *install webpack globaly on your machine* 

        npm install -g webpack
Install Babel globaly. Babel will is needed to build out our project's configurations. [Babel](https://babeljs.io/)
        
        npm install -g babel-cli



 *Install the rest the project dependencies*

        npm install 
  
  # Running the project 
   
   open up your console/terminal in the project's root directory. Type the following command in the terminal/console

   `npm start`

This will start the development server for the project
   
   *NOTE: That the application will attempt to run nvm (Node version Manager) before starting up the server. If you don't have nvm installed I suggest installing it https://github.com/creationix/nvm/blob/master/README.md. NOTE THIS WILL ONLY WORK FOR LINUX/MACOS USERS*

If your sure you are using the right version of node that is required for theis project you can disable the prestart script by commenting out the prestart property `"prestart": "nvm use v8.6.0"` in package.json file 


## NVM FOR WINDOWS
If you have a windows machine I suggest ussing the following link to install NVM for windows [NVM FOR WINDOWS](https://github.com/coreybutler/nvm-windows)

## Documentation
### Install
Install jsdoc globaly 

                npm install -g jsdoc
### Running the project
        npm run doc
This will run the jsdoc using the configuration specified in the JSDoc.config.json file. The application will document all the files in the app folder.

### Todo
* Install linter for documentation [ESLINT](https://eslint.org/docs/rules/valid-jsdoc)


 



