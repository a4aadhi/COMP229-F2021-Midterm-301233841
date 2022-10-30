/*
Student Name: Adarsh Madhusoodanan Nair
Student ID: 301233841
Date: 30 Oct 2022
*/
let mongoose = require('mongoose');

// create a model class
let book = mongoose.Schema({
    Title: String,
    Author: String,
    Genre: String,
    Price: Number
},
{
  collection: "booklist"
});

module.exports = mongoose.model('book', book);
