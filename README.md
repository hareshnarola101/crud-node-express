# Book Management API

This API allows you to manage a collection of books, including creating, reading, updating, and deleting books.


## API Endpoints and Usage

### Create a New Book
- **Endpoint**: POST /books
- **Usage**: Create a new book by sending a POST request with the book details in the request body.
- **Request Body**:
  ```json
  {
    "title": "Book Title",
    "author": "Author Name",
    "summary": "Book Summary"
  }
  ```

### Get a List of All Books
- **Endpoint**: GET /books
- **Usage**: Retrieve a list of all books in the database.

### Get Details of a Specific Book
- **Endpoint**: GET /books/:id
- **Usage**: Retrieve details of a specific book by providing its ID in the URL.

### Update a Book
- **Endpoint**: PUT /books/:id
- **Usage**: Update the details of a book by providing its ID in the URL and sending the updated book details in the request body.
- **Request Body**:
  ```json
  {
    "title": "Updated Title",
    "author": "Updated Author",
    "summary": "Updated Summary"
  }
  ```

### Delete a Book
- **Endpoint**: DELETE /books/:id
- **Usage**: Delete a book by providing its ID in the URL.

## Setup and Run the Application Locally

1. Clone the repository:
   ```
   git clone https://github.com/hareshnarola101/crud-node-express.git
   ```

2. Navigate to the project directory:
   ```
   cd crud-node-express
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up a MongoDB database:
   - Create a MongoDB database and configure the connection in the `server.js` or a separate configuration file.

5. Start the application:
   ```
   npm start
   ```

6. The API will be accessible at `http://localhost:3000`. You can now use API endpoints as described above.

## Assumptions and Decisions

During the development process, the following assumptions and decisions were made:

- Assumption: The book data includes fields for title, author, and summary.
- Decision: Error handling includes providing appropriate status codes and error messages.
- Decision: The application uses the default port 3000 for the API server, but you can change it in the `app.js` file if needed.
- Assumption: MongoDB is set up and accessible for the application to connect to.
- Decision: The API uses Express.js for routing and Mongoose for database interactions.

