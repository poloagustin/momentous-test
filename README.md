#Momentous Test
This repository holds the implementation for the test from Momentous Technologies.
#Author:
###Agustin Polo

#Instructions
1. Make sure you have [NodeJS](https://nodejs.org/en/) installed on the machine.

2. If you have unzipped the code, you are all set. Go to step **6** ;)
Otherwise, open a command prompt and go to the directory where the app is.

3. Run the following command to install the application dependencies.

    npm install
    
4. Run the following command.

    .\node_modules\.bin\tsd install
    
4. Run the following command to create all the neccessary files.

    gulp
    
5. Run the following command to run the server.

    .\node_modules\.bin\http-server
    
#API:
The application expects a REST API to be hosted in the same domain as the angular application.
This API needs the following resources:
* **GET** - *api/projects*
    This resource returns a collection of projects.
* **GET** - *api/projects/:id*
    This resource returns the information for one project based on the id given as a parameter.
* **POST** - *api/projects*
    This resource creates a new project.
* **PUT** - *api/projects/:id*
    This resource updates the information of the project that has the id given as a parameter.
* **GET** - *api/projects/:id/activities*
    This resource returns the activities associated to the project that has the id given as a parameter.

The schema for a project is as follows:
* **id** - *number* - The identifier for the project.
* **name** - *string* - The name of the project.
* **description** - *string* - The description of the project.
* **status** - *Status* - The status of the project.
* **relatedRfi** - *string* - The related RFI of the project.
* **notes** - *string* - The notes for the project.
* **activities** - *Activity[]* - The activities for the project.

The schema for a status is as follows:
* **id** - *number* - The identifier for the project.
* **name** - *string* - The name of the status.

The schema for an activity is as follows:
* **date** - *Date* - The date of the activity.
* **status** - *number* - The status of the activity. **0** for *'Pending Activities'* and **1** for *'Completed Activities'*.
* **qty** - *number* - The amount of activities.