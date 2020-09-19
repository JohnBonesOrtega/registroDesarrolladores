const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const developerSchema = new Schema({
    nombres_completos: {
        type: String,
        required: true,
    },
    link_github: {
        type: String,
        required: true,
    },
    tecnologias_conocidas: {
        type: [String],
        required: true
    }
});

module.exports = developerSchema;