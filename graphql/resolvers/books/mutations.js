import Book from "../../../models/book.js";
import Genre from "../../../models/genre.js"
import Author from "../../../models/author.js"

const bookMutations = {
    addBook: async (_, { book }) => {
        let newBook = new Book( book );
        return newBook.save()
            .then(book => {
                book.authors.forEach(async author => {
                    Author.findById(author).then(author => {
                        author.updateOne({ $push: {books: book._id} }).then()
                        book.genres.forEach(genre => {
                            if (!author.genres.includes(genre)) {
                                author.update({ $push: {genres: genre} }).then()
                            }
                            Genre.findByIdAndUpdate(genre, { $push: {books: book._id} }).then()
                        })
                    }).then()
                })
                return book.populate("authors")
            })
            .then(book => book.populate("genres"))
    }
}

export default bookMutations;