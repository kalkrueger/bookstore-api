import mongoose from "mongoose";
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    firstName: String,
    lastName: String,
    books: [{
        type: Schema.Types.ObjectId,
        ref: "book"
    }],
    genres: [{
        type: Schema.Types.ObjectId,
        ref: "genre"
    }],
});

const Author = mongoose.model("author", authorSchema);

export default Author; 