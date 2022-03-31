import Book from "../../../models/book.js";
import Author from "../../../models/author.js";
import Genre from "../../../models/genre.js";

const bookQueries = {
    books: async (_, args) => {
        return Book.find().then(books => {
            return books.map(book => {
                return book.populate({ path: "authors" }).then(book => book.populate({ path: "genres" }))
            })
        })
    },

    // books: async (_, args) => {
    //     return Book.find().populate("authors").populate("genres")
    // },

    book: async (_, args) => {
        return Book.findById(args.id).populate("authors" ).populate("genres")
    },

    bestSellers: async (_, args) => {
        return Book.find({bestSeller: true}).populate("authors" ).populate("genres")
    },
}

export default bookQueries;