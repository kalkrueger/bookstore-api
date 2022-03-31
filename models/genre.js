import mongoose from "mongoose";
const Schema = mongoose.Schema;

const genreSchema = new Schema({
    genre: String,
    books: [{
        type: Schema.Types.ObjectId,
        ref: "book"
    }],
});

const Genre = mongoose.model("genre", genreSchema);

export default Genre;