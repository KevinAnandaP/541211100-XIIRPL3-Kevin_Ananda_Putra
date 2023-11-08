const mongoose = require("mongoose")

const TableSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
});

const Table = mongoose.model("User", TableSchema);