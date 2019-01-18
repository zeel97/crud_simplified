# crud_simplified

![License](https://img.shields.io/badge/License-MIT-blue.svg) ![NPM Version](https://img.shields.io/badge/Version-1.0.1-brightgreen.svg) 

## Use the CRUD functions with just *one* line of code. 
### Say no to controllers

![Just Say No](https://media.giphy.com/media/l4KhLcfxv7AEqb00U/giphy.gif)

So basically,when trying to use mongoDB with node.js, we end up breaking it down into 3 files: routes, model, controller. 
'crud_simplified' is to resolve the need for a separate controller for different models or even in general use. 
It covers the CRUD functions:
  * **c**reate: creates/adds data to the model
  * **r**eadAll: reads all the entries
  * **r**eadById: reads
  * **u**pdate: updates specific entry using the unique object id
  * **d**eleteAll: deletes all the entries
  * **d**eleteById: deletes entry of a specific Id
  
  ### How to install
  
  `npm install @zeelmehta/crud_simplified`
  
  ### Integrate it into your node project
  
  `const crud = require('@zeelmehta/crud_simplified');`
  
  ### Create function
  This function allows you to save single to multiple entries with just a single line of code.
  
  `var result = await crud.create(model,data)`
  
   ### ReadAll function
  This function allows you to read all the entries in model.
  
  `var result = await crud.readAll(model)`
  
   ### ReadById function
  This function allows you to read the entry in the model by Id.
  
  `var result = await crud.readById(model,Id)`
  
  ### Update function
  This function allows you to update the entry in the model by Id.
  
  `var result = await crud.update(model, newData, Id)`
  
  ### DeleteAll function
  This function allows you to delete all the entries in model.
  
  `var result = await crud.deleteAll(model)`
  
   ### DeleteById function
  This function allows you to delete the entry in the model by Id.
  
  `var result = await crud.deleteById(model, Id)`
  
  ### That's all! With just one line of code! 
