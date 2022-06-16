const mongoose = require('mongoose');

const TransactionHistory = new mongoose.Schema({
    event: String,
    object: String,
    fromto: String,
    account: String,
    value: String,
    time: String,
    link: String
});

module.exports = mongoose.model('transactionshistory', TransactionHistory)