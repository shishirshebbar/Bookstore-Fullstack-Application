import Book from "../models/bookmodels.js";

export const getBook = async (req, res) => {
    try {
        // Fetch all books from the database
        const books = await Book.find();  // Ensure the variable name is 'books'
        
        // Send the retrieved books as a JSON response with a 200 status code
        res.status(200).json(books);

    } catch (error) {
        // Log any error that occurs during the operation
        console.log("Error: " + error);

        // Send a 500 status code with the error message if something goes wrong
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
