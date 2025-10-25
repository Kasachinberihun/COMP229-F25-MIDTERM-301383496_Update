# Midterm API Project - COMP229

## Project Overview
Your task for the COMP229 midterm is to wire up a RESTful API that manages a collection of video games. An Express server is already configured to run on port `3000`, and a starter library of game data is provided—you just need to implement each endpoint.

### Endpoints
1. **GET /api/games** – Retrieve the full list of games.
2. **GET /api/games/filter?genre=[genre name]** – Retrieve games whose genre matches the query.
3. **GET /api/games/:id** – Retrieve a game by its index (ID).
4. **POST /api/games** – Add a new game to the library.
5. **PUT /api/games/:id** – Update a game by its index (ID).
6. **DELETE /api/games/:id** – Remove a game by its index (ID).

The starter data lives in `server.js`, but **you must complete the logic** for every endpoint above.

### Array Example
Below is an example of the object structure you will manipulate (the one below refers to books not games, but you got the idea: **there is an array of games already in the code or use your own**):

![Array Example](public/images/array-example.jpg)

---

## Personalized Requirements

### Tailor the Library Using Your Student ID
**Add exactly two games to the starter array** based on the last digit of your student ID:
- **0–1:** Add 2 games released between **1990–1999**
- **2–3:** Add 2 games released between **2000–2009**
- **4–5:** Add 2 games released between **2010–2019**
- **6–7:** Add 2 games released between **2020–2024**
- **8–9:** Add 2 **indie** games (any year)

**Example:** Student ID `301234567` ends in 7 ⇒ add two games released between 2020–2024.

### Format for Your Additional Games
```javascript
{
  title: 'Game Title',
  genre: 'Genre',
  platform: 'Primary Platform',
  year: YYYY,
  developer: 'Studio Name'
}
```

### Screenshot Requirement
Capture at least one API response that clearly displays the entire personalized library (starter games + your two additions = 7 total).

---

## Setup Instructions

1. **Clone the repository**  
   `https://github.com/CENT-COL/COMP229-MIDTERM`
2. **Install dependencies**  
   ```bash
   npm install
   ```
3. **Run the server**  
   ```bash
   npm start
   ```
   The server listens on port `3000`.
4. **Test the API**  
   Use Postman, Thunder Client, Insomnia, or a similar tool. For each endpoint:
   - Make the request using the correct method and URL.
   - Include the request body for POST and PUT calls.
   - Verify the response payload and HTTP status code.

---

## Submission Requirements

1. **Screenshots**  
   Provide clear evidence of testing for **all six endpoints**. Every screenshot must show:
   - Request URL and method
   - Request body when applicable
   - Successful response with status code
   - At least one screenshot highlighting your complete 7-game library

   **Filename convention:** `[StudentID]_[LastName]_[EndpointNumber]_[Method].png`  
   Example: `301234567_Smith_01_GET_ALL.png`

   **Need a reference?** `public/images/postman-example.jpg` showcases the expected layout.

2. **Code Submission**  
   - Zip your project files.
   - Share the GitHub repository link containing your implementation.
   - Keep screenshots organized and easy to review.
   - Confirm your personalized games appear in both code and responses.

3. **Reflection (optional, but recommended)**  
   Summarize in a short paragraph how you validated each endpoint and any edge cases considered.

---

## Academic Integrity Notice
⚠️ **Warning:** Submissions are reviewed for
- Personalized additions that match your student ID rule set
- Proper screenshot naming conventions
- Unique game selections across submissions

Suspected irregularities will be investigated according to academic integrity policies.

---

## Good Luck!
Write clean, well-structured code, validate inputs, and handle errors gracefully. You’ve got this!
