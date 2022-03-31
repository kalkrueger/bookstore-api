import Genre from "../../../models/genre.js";

const genreMutations = {
    addGenre: async (_, { genre }) => {
        let newGenre = new Genre( genre );
        return newGenre.save()
    }
}

export default genreMutations;