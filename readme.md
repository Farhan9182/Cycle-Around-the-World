Project Title: Cycle Around the World
Introduction:
In the "Cycle Around the World" mini-project, you will showcase your skills in creating a database, developing a Node.js Express application, performing data calculations, and ensuring robust error handling. The objective is to create an application that estimates cycling times to various tourist destinations around the world, while also considering their accessibility for cycling.
Key Features:

Task 1: Database Setup
Create a MySQL database and design a table to store information about 10 tourist spots.
The table should encompass fields for the spot's name, latitude, longitude, and a boolean value indicating whether it's accessible by cycling.

Task 2: Express Application Setup
Develop a Node.js Express application with JWT (JSON Web Token) authentication for secure access.
Define the following routes:
POST /auth: Authenticate users using JWT by providing a username and password.
GET /spots: Return a list of the 10 tourist spots with their names (without latitude and longitude). This endpoint requires JWT authentication.
GET /spots/:spotName: Provide detailed information about a specific tourist spot, including latitude, longitude, and accessibility by cycling. This endpoint requires JWT authentication.
POST /calculate: Accept user input for their current location (latitude and longitude) Using HTML Geolocation, chosen tourist spot (by selecting), cycling speed (in km/h), and daily cycling hours. JWT authentication is required for this endpoint.
GET /estimate: Return the estimated time it would take to cycle from the user's location to the chosen tourist spot. This endpoint also requires JWT authentication.

Task 3: Data and Example Spots
Populate the MySQL database with data for 10 example tourist spots, each with a name, latitude, longitude, and cycling accessibility.

Task 4: Calculations
When a user makes a POST request to /calculate, verify if the chosen tourist spot is accessible by cycling.
If it is accessible, calculate the distance (in kilometers) between the user's location and the chosen spot using the Haversine formula (https://en.wikipedia.org/wiki/Haversine_formula).
Estimate the time (in hours) it would take to cycle from the user's location to the chosen spot based on their input of cycling speed and daily cycling hours.
If the spot is not accessible for cycling, return a message indicating this limitation.

Task 5: Error Handling
Handle errors gracefully, including cases where the chosen tourist spot does not exist, invalid user input, or issues related to database connectivity.

Dataset:
10 example tourist spots:
Antarctica (Inaccessible by Cycling)
Greenland (Inaccessible by Cycling)
Easter Island (Accessible by Cycling)
Machu Picchu (Inaccessible by Cycling)
Mount Everest (Inaccessible by Cycling)
Great Barrier Reef (Inaccessible by Cycling)
Stonehenge (Accessible by Cycling)
Trans-Siberian Railway (Inaccessible by Cycling)
Uluru (Ayers Rock) (Inaccessible by Cycling)
The Great Wall of China (Accessible by Cycling)

Used this dataset to populate the database and develop functional endpoints for the project.

Tech Stack:
React, Nodejs, Express, MySQL, Sequelize