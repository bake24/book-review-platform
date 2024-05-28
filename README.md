### Book Review Platform

This is a web application that allows users to read, publish, and discuss book reviews. Users can register, leave their reviews and ratings, and view recommendations and other users' ratings.

## Features

- User registration and login
- Book search functionality
- Detailed book view with reviews
- Ability to add and view reviews for each book
- Local storage for storing user data and reviews

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation 

1. Clone the repository:

   ```bash
   git clone https://github.com/bake24/book-review-platform.git
   cd book-review-platform

2. Install the dependencies:
    ```bash
    npm install

3. Running the Application
    To start the development server, run:
   ```bash
     npm start

This will start the application at http://localhost:3000.

## Project Structure
   ```bash
   /public
     index.html
   /src
     /components
       BookDetails.js
       Home.js
       Search.js
       Register.js
       Login.js
     App.js
     index.css
     index.js
     api.js
   /firebase.js
   /package.json
   /README.md

```
**Design and Development Process**

The application is built using React and utilizes local storage for managing user data and reviews. The book data is fetched from the Google Books API.
Unique Methodologies

    - The project uses React Router for navigation between different pages.
    - Local storage is used to persist user data and reviews between sessions.

**Compromises and Known Issues**

    - The application uses local storage, which is not suitable for large-scale applications with many users. For a production environment, a proper backend should be implemented.
    - Reviews are not moderated, which could lead to inappropriate content being stored.

*Author*

    Duisenbekov Bakdaulet - Book Review Platform

