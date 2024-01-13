const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    end_year: {
        type: Number,
        required: false, // Adjust as needed
    },
    intensity: {
        type: Number,
        required: false,
    },
    sector: {
        type: String,
        required: false, // Adjust as needed
    },
    topic: {
        type: String,
        required: false, // Adjust as needed
    },
    insight: {
        type: String,
        required: false, // Adjust as needed
    },
    url: {
        type: String,
        required: false, // Adjust as needed
    },
    region: {
        type: String,
        required: false, // Adjust as needed
    },
    start_year: {
        type: Number,
        required: false, // Adjust as needed
    },
    impact: {
        type: String,
        required: false, // Adjust as needed
    },
    added: {
        type: Date,
        required: false, // Adjust as needed
    },
    published: {
        type: Date,
        required: false, // Adjust as needed
    },
    country: {
        type: String,
        required: false, // Adjust as needed
    },
    relevance: {
        type: Number,
        required: false,
    },
    pestle: {
        type: String,
        required: false, // Adjust as needed
    },
    source: {
        type: String,
        required: false, // Adjust as needed
    },
    title: {
        type: String,
        required: false, // Adjust as needed
    },
    likelihood: {
        type: Number,
        required: false, // Adjust as needed
    },
});

const Dashboard = mongoose.model('Dashboard', dataSchema);

module.exports = Dashboard;