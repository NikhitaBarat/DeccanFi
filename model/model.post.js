const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    title: String,
    comment_body: String
})

// const PostSchema = new mongoose.Schema({
//     transaction: String,
//     bid_price: String,
//     comments: [CommentSchema]
// })