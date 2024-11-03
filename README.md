# Star-Wars-React-App
The goal of this project is to create a maintainable and scalable single-page application using React. This application fetches data from the SWAPI API and includes a responsive interface with pagination, search functionality, and character details, alongside a favorites list. The project is designed as a potential foundation for a larger app.

Note: The project is built in JavaScript instead of TypeScript, as I am still learning TypeScript. Testing has been introduced as a new concept for me, so the test suite will be introduced and exapnded as I gain experience on the subject.

Features
Character List View
Displays all characters from the Star Wars universe (shows name, gender, and home planet).
Includes pagination controls to navigate through multiple pages of results.
Includes a search field to filter characters by name.
Click on a character to navigate to their detailed information page.


Character Details View
Shows detailed information about a character, including:
Name
Hair color
Eye color
Gender
Home planet
List of films in which the character has appeared
List of starships the character has piloted
Allows users to add a character to their favorites list if they are not already added.


Favorites View
Lists all characters added to the favorites list, displaying:
Name
Height
Gender
Home planet
Provides functionality to remove characters from the favorites list.
Bonus Features
Allows users to edit the height and gender of a character in the favorites view.


Technologies Used
JavaScript (ES6)
React: For building UI components.
React Router: For managing page navigation.
Sass and Sass-MQ: For styling with CSS pre-processing.
Jest (optional) or another testing library: For unit and integration testing.


Setup and Installation
To run this project locally:

Clone the Repository

git clone https://github.com/HamidKhaldi/Star-Wars-React-App.git
cd star-wars-app
Install Dependencies Make sure you have Node.js installed, then install the dependencies:

npm install


Run the Application Start the development server:

npm start
The app will be accessible at http://localhost:3000.


Testing
Whislt I am familiar with the frameworks used for Testing and their best uses (e.g. Cypress for E2E, Jest for component or intergation testing), I consider myself still a novice in this field.


Additional Considerations:

Responsiveness: The application is designed to be responsive, adjusting layout and navigation for various screen sizes.
Scalability and Maintainability: While built for simplicity, the project’s structure allows for easy expansion of features or component reuse. 
