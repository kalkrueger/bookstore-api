import { authorQueries, authorMutations } from "./authors/index.js"
import { bookQueries, bookMutations } from "./books/index.js"
import { genreQueries, genreMutations } from "./genres/index.js"

const resolvers = {
    Query: {
        ...authorQueries,
        ...bookQueries,
        ...genreQueries,
    },
    Mutation: {
        ...authorMutations,
        ...bookMutations,
        ...genreMutations,
    }
};

export default resolvers;