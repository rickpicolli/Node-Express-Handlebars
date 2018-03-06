# Yummi Burger!
A Full stack Application that use the technologies:  
- JavaScript
- Node.js
- Express
- MySQL
- ORM
- Handlebars

## Description

This is a full stack application with a front end implemented with HTML/CSS and elements from HandleBars and the backend implemented with Node.js and Express. HTML templating is done with the help of Handlebars.

The user can add any burger name to add it to the menu. At the same time, this action also adds the new burger into the MySQL database. The initial burger entry is added as *Burgers to Eat* on the menu and placed on the left side of the screen. The users can eat any burger by clicking on it, which moves it into the column on the right as *Eaten Burgers* and updates its status accordingly in the database.
Please check out the launched app on Heroku [here](https://safe-basin-74431.herokuapp.com/)!

## Screenshot

![Alt text](/public/assets/img/screenshot.png?raw=true)

## Installation

If you prefer to run the application locally, clone this repository with the following command.

	git clone https://github.com/rickpicolli/Node-Express-Handlebars.git
	
Next, install the application dependencies.

	npm install
	
Finally, run the node server locally.

	node server.js
	
Now, open the local application on port 3000 at the URL: `http://localhost:3000/`.

## **Author**

* Rick Picolli - https://github.com/rickpicolli


