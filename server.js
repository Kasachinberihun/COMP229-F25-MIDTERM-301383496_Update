/**
 * Midterm API Project - COMP229
 *
 * Challenge: Implement the API logic for managing a collection of video games!
 *
 * Here's the setup:
 * A server is already running on port 3000 with an array of game objects.
 * Your mission is to implement the missing logic for each of the endpoints below.
 *
 * Endpoints:
 * 1. GET /api/games       - Retrieve the full list of games.
 * 2. GET /api/games/filter?genre=[genre name] - Retrieve games by genre match.
 * 3. GET /api/games/:id   - Retrieve a game by its index.
 * 4. POST /api/games      - Add a new game to the library.
 * 5. PUT /api/games/:id   - Update a game by its index.
 * 6. DELETE /api/games/:id - Remove a game from the library by its index.
 *
 * The array of games is already defined for you, but you need to bring the logic
 * to life. Test your work using tools like Postman, Thunder Client, or Insomnia.
 *
 * Submission Requirements:
 * 1. Screenshots: Provide one per endpoint, showing the request details and a
 *    successful response with the correct status code.
 * 2. Code Submission: Zip your project, share the repo link, and ensure your
 *    personalized games are present.
 *
 * Good luck, and may your code be bug-free!
 */

const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

// Serve static files (e.g., images, CSS) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Array of game objects

let games = [
  { title: 'The Legend of Zelda: Breath of the Wild', genre: 'Adventure', platform: 'Nintendo Switch', year: 2017, developer: 'Nintendo' },
  { title: 'God of War', genre: 'Action', platform: 'PlayStation 4', year: 2018, developer: 'Santa Monica Studio' },
  { title: 'Hollow Knight', genre: 'Metroidvania', platform: 'PC', year: 2017, developer: 'Team Cherry' },
  { title: 'Forza Horizon 5', genre: 'Racing', platform: 'Xbox Series X|S', year: 2021, developer: 'Playground Games' },
  { title: 'Stardew Valley', genre: 'Simulation', platform: 'Nintendo Switch', year: 2016, developer: 'ConcernedApe' },

  // Personalized additions for ID ending in 6 → games released 2020–2024
  { title: 'Elden Ring', genre: 'Action RPG', platform: 'PC/PS5/XSX', year: 2022, developer: 'FromSoftware' },
  { title: "Baldur's Gate 3", genre: 'RPG', platform: 'PC/PS5/XSX', year: 2023, developer: 'Larian Studios' }
];


// Set the port for the server
const PORT = 3000;

// Serve the instructions HTML file (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// API Endpoints


// GET /api/games
// Description: Get all games
// Task: Implement logic to return the full list of games
app.get('/api/games', (req, res) => {
  // ✅ Return the full list of games
  res.status(200).json(games);
});


// GET /api/games/filter?genre=[genre name]
// Description: Filter games by genre
// Task: Implement logic to return games matching the specified genre
app.get('/api/games/filter', (req, res) => {
  // ✅ Get the genre from the query string
  const { genre } = req.query;

  // ✅ If no genre provided, send an error
  if (!genre || !genre.trim()) {
    return res.status(400).json({ error: 'Query parameter "genre" is required' });
  }

  // ✅ Filter the games array (case-insensitive)
  const filteredGames = games.filter(
    g => g.genre.toLowerCase().includes(genre.toLowerCase())
  );

  // ✅ Return the filtered results
  res.status(200).json(filteredGames);
});


// GET /api/games/:id
// Description: Get a specific game by ID
// Task: Implement logic to return a game by its index (ID)
app.get('/api/games/:id', (req, res) => {
  // ✅ Convert id from string to number
  const id = Number(req.params.id);

  // ✅ Check if id is valid
  if (isNaN(id) || id < 0 || id >= games.length) {
    return res.status(404).json({ error: 'Game not found' });
  }

  // ✅ Return the game with that index
  res.status(200).json(games[id]);
});


// POST /api/games
// Description: Add a new game
// Task: Implement logic to add a new game to the array
app.post('/api/games', (req, res) => {
  // ✅ Get the new game data from the request body
  const newGame = req.body;

  // ✅ Check that all required fields are present
  const required = ['title', 'genre', 'platform', 'year', 'developer'];
  for (const key of required) {
    if (!newGame[key]) {
      return res.status(400).json({ error: `Missing field: ${key}` });
    }
  }

  // ✅ Add the new game to the array
  games.push(newGame);

  // ✅ Send back confirmation and new total count
  res.status(201).json({
    message: 'Game added successfully',
    index: games.length - 1,
    game: newGame
  });
});


//
// PUT /api/games/:id
// Description: Update a game by ID
// Task: Implement logic to update a game by its index (ID)
app.put('/api/games/:id', (req, res) => {
  // ✅ Convert ID to a number
  const id = Number(req.params.id);

  // ✅ Check if the ID is valid
  if (isNaN(id) || id < 0 || id >= games.length) {
    return res.status(404).json({ error: 'Game not found' });
  }

  // ✅ Get the updated data from the request body
  const updatedGame = req.body;

  // ✅ Validate required fields
  const required = ['title', 'genre', 'platform', 'year', 'developer'];
  for (const key of required) {
    if (!updatedGame[key]) {
      return res.status(400).json({ error: `Missing field: ${key}` });
    }
  }

  // ✅ Replace the existing game with the new data
  games[id] = updatedGame;

  // ✅ Respond with success message and updated object
  res.status(200).json({
    message: 'Game updated successfully',
    index: id,
    game: games[id]
  });
});


// DELETE /api/games/:id
// Description: Remove a game by ID
// Task: Implement logic to remove a game by its index (ID)
app.delete('/api/games/:id', (req, res) => {
  // ✅ Convert ID to a number
  const id = Number(req.params.id);

  // ✅ Check if the ID is valid
  if (isNaN(id) || id < 0 || id >= games.length) {
    return res.status(404).json({ error: 'Game not found' });
  }

  // ✅ Remove the game from the array
  const removedGame = games.splice(id, 1)[0];

  // ✅ Send confirmation with the removed game and new total
  res.status(200).json({
    message: 'Game deleted successfully',
    removed: removedGame,
    remaining: games.length
  });
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
