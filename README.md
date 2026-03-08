# Assignment 2 - TaskMaster Pro API

Backend service for a productivity application with Users and Tasks using Express, Sequelize, and PostgreSQL.

## Installation Steps

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create environment file:

   ```bash
   cp .env.example .env
   ```

3. Update `.env` with your database credentials.

4. Start the server:
   ```bash
   npm run dev
   ```

Server runs at `http://localhost:3000` by default.

## Database Setup Instructions

1. Ensure PostgreSQL is running.
2. Create a database (example):
   ```sql
   CREATE DATABASE task_master;
   ```
3. Update `.env`:
   ```env
   DB_HOST=localhost
   DB_NAME=task_master
   DB_USER=postgres
   DB_PASS=your_password
   DB_DIALECT=postgres
   PORT=3000
   ```
4. The app will auto-sync tables on startup via Sequelize.

## API Documentation

Base URL: `http://localhost:3000`

### Users

- **Create User**
  - `POST` `http://localhost:3000/users`
  - `POST /users`
  - Body:
    ```json
    {
      "name": "azree nasir",
      "email": "azreenasir@email.com"
    }
    ```

- **Get All Users**
  - `GET` `http://localhost:3000/users`
  - `GET /users`

- **Get User by ID**
  - `GET` `http://localhost:3000/users/1`
  - `GET /users/:id`

- **Delete User**
  - `DELETE` `http://localhost:3000/users/1`
  - `DELETE /users/:id`
  - Cascade deletes all tasks for the user.

### Tasks

- **Create Task**
  - `POST` `http://localhost:3000/tasks`
  - `POST /tasks`
  - Body:
    ```json
    {
      "title": "Finish Assignment",
      "description": "Complete Sequelize homework",
      "dueDate": "2026-03-29",
      "userId": 1
    }
    ```

- **Get All Tasks (includes User data)**
  - `GET` `http://localhost:3000/tasks`
  - `GET /tasks`

- **Get Task by ID (includes User data)**
  - `GET` `http://localhost:3000/tasks/1`
  - `GET /tasks/:id`

- **Update Task**
  - `PUT` `http://localhost:3000/tasks/1`
  - `PUT /tasks/:id`
  - Body (any of the following):
    ```json
    {
      "title": "Updated title",
      "description": "Updated description",
      "status": "completed",
      "dueDate": "2026-04-01"
    }
    ```

- **Delete Task**
  - `DELETE` `http://localhost:3000/tasks/1`
  - `DELETE /tasks/:id`
