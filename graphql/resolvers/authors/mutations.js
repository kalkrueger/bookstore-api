import Author from "../../../models/author.js";

const authorMutations = {
    addAuthor: (_, { author }) => {
        let newAuthor = new Author( author );
        return newAuthor.save()
    },
}

export default authorMutations;