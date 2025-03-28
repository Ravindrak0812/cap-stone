const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: String, // Main category (Technician, Electrician, etc.)
    image: String, // Image URL for category
    subcategories: [
        {
            name: String, // Subcategory name (AC Repair, Cooler Repair, etc.)
            price: Number, // Price for this subcategory
            description: String // Details about this service
        }
    ]
});

module.exports = mongoose.model("Category", CategorySchema);
