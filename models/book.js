import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    authors: [{
        type: Schema.Types.ObjectId,
        ref: "author"
    }],
    genres: [{
        type: Schema.Types.ObjectId,
        ref: "genre"
    }],
    releaseDate: Date,
    bestSeller: {
        type: Boolean,
        default: false
    }
});

const Book = mongoose.model("book", bookSchema);

export default Book; 