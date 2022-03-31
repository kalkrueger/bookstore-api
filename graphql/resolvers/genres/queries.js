import Genre from "../../../models/genre.js";

const genreQueries = {
    genres: async (_, args) => {
        return Genre.find();
    },

    genre: async (_, args) => {
        return Genre.findById(args.id).populate({
            path: "books",
            populate: {path: "authors"}
        })
    },

}

export default genreQueries;