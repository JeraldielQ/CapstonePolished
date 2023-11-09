# My Capstone Project

This is my capstone project for the database management step.

## API Link
[Book API](https://example-data.draftbit.com/books?_limit=240)

## Schema Design
-- users table
CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL CHECK (position('@' IN email) > 1),
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

## Project Details

### Title
BookHub

### Description
BookHub is a web application that allows users to explore a curated collection of books, add them to their favorites, and access detailed information about each book.

### Features
- **Book List:** Displays a grid of books from the API.
- **Search Bar:** Enables users to search for specific books.
- **Favorites:** Allows users to add and remove books from their favorites.
- **User Authentication:** Secure user authentication for personalized experiences.

### User Flow
- **Homepage: Users land on the homepage showcasing a grid of books. They can use the search bar to find specific books.
- **Book Details: Clicking on a book takes users to a detailed view with information about the book.
- **Favorites: Users can add or remove books from their favorites. Favorite books are accessible via the Favorites page.

### Technology
- **React: Use it for the frontend.
- **Node.js: Use it for the backend.
- **Axios: Use it to retrive the information.
- **Postgresl: Use it for the databases.

### To use
1) Dowloand the files.
2) Separately cd into both the backend and frontend.
3) Install dependecies in both( In the backend might want to change the config so it works with your Postgrel).
4) In both run npm start.
5) Enjoy !
