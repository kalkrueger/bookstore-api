import Author from "../../../models/author.js";

const authorQueries = {
    authors: async (_, args) => {
        return Author.find().populate("books").populate("genres")
    },

    author: async (_, args) => {
        return Author.findById(args.id).populate({
                    path: "books",
                    populate: { path: "genres" }
                })
    }
}

export default authorQueries;