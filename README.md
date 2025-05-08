# my-express-ts-app

A Node.js/Express.js and TypeScript application that generates user avatars on the server-side. It provides an endpoint to create a 100x100px avatar image based on a user's name, with an optional background color.

## Prerequisites

Make sure you have Node.js and npm installed on your system.

## Installation

1. Clone the repository (if applicable).
2. Install the dependencies:
   ```bash
   npm install
   ```

## Available Scripts

In the project directory, you can run the following scripts:

### `npm run dev`

Runs the app in development mode using `nodemon`. It will automatically restart the server when
code changes are detected in the `src` directory. The server will be available at `http://localhost:3000` (or the port specified in your `.env` file).

### `npm run build`

Builds the app for production to the `dist` folder.
It transpiles TypeScript to JavaScript.

### `npm run start`

Runs the built app in production mode. Make sure you have run `npm run build` before running this script. The server will be available at `http://localhost:3000` (or the port specified in your `.env` file).

## Accessing the UI

The project includes a simple user interface to interact with the avatar generation endpoint. You can access it by navigating to the root URL of the server in your browser:

`http://localhost:3000/` (or the port specified in your `.env` file).

This will load the `public/index.html` file.

## API Endpoints

### GET `/user-avatar`

Generates a 100x100px user avatar image.

**Query Parameters:**

*   `name` (string, mandatory): The name to be used for generating the avatar. Max 50 characters.
*   `backgroundColor` (string, optional): The background color for the avatar as a hex code (e.g., `FFDBAC`, `ca8a04`). If not provided, a default color will be used.

**Responses:**

*   `200 OK`: Returns the generated avatar image (content type `image/svg+xml`).
*   `400 Bad Request`: If the `name` parameter is missing or invalid, or if `backgroundColor` is invalid.

**Examples:**

*   `http://localhost:3000/user-avatar?name=Alterya`
*   `http://localhost:3000/user-avatar?name=Alterya&backgroundColor=ca8a04`

## Technologies Used

- Node.js
- Express.js
- TypeScript
- DiceBear (for avatar generation: `@dicebear/core`, `@dicebear/collection`)
- dotenv (for environment variable management)
- express-validator (for input validation)
- nodemon (for development server auto-restart)
