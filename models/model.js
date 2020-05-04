var mongoose = require("mongoose");

var schema = new mongoose.Schema({
    subjects:[]
});

module.exports = mongoose.model("Model",schema);