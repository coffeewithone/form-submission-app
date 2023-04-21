// Import the Express library
const express = require('express');

// Create an instance of the Express application
const app = express();

// Set the port number for the server
const port = 5000;

// Use middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Use middleware to parse incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: false }));

// Handle GET requests to the root route of the server
app.get('/', (req, res) => {
  // Send a response to the client with the message "Hello World!"
  res.send('Hello World!');
});

// Start the server and listen on the specified port number
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
