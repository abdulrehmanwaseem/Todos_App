# Todos App (MERN Stack)

![Todo App](https://img.shields.io/badge/MERN-Stack-blueviolet) ![CRUD Operations](https://img.shields.io/badge/CRUD-Basic-success)

Welcome to the **Todos App**, a simple task management application built using the **MERN stack**. This project is my first full-stack web application where I implemented **basic CRUD (Create, Read, Update, Delete) operations**. It was a great learning experience as I built the app from scratch by myself!

## Features

- **Add New Todos**: Create new tasks with ease.
- **View Todos**: Display a list of all your tasks.
- **Update Todos**: Edit the content or status of your tasks.
- **Delete Todos**: Remove tasks once they're completed or no longer needed.

## Tech Stack

- **MongoDB**: Database for storing todos.
- **Express.js**: Backend framework to handle server and API routes.
- **React.js**: Frontend framework to build a dynamic and responsive user interface.
- **Node.js**: Backend runtime environment for server-side JavaScript execution.

## Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todos-mern-app.git
   cd todos-mern-app
   ```

2. Install backend dependencies:
   ```bash
   cd server
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../client
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the backend directory and add the following:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=yourport
     ```

5. Run the backend server:
   ```bash
   cd server
   npm start
   ```

6. Run the frontend React app:
   ```bash
   cd ../client
   npm start
   ```

7. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Learning Outcomes

- Gained experience working with the **MERN stack**.
- Developed an understanding of how **RESTful APIs** work.
- Improved problem-solving and debugging skills.
- Practiced implementing **CRUD operations** with MongoDB.

## Future Improvements

- Add user authentication and authorization (using JWT).
- Implement search and filter functionality for todos.
- Enhance the user interface with more advanced design features.

## License

This project is open-source and available under the [MIT License](./LICENSE).

---

This README gives a concise overview of your project and includes helpful installation steps, descriptions, and next steps. Let me know if you'd like any changes!
