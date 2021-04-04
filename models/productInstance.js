/*const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductInstanceSchema = new Schema(
    {
        number_of_items: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            required: true,
            enum: ['Available', 'Out of Stock']
        },
    }
);

ProductInstanceSchema.virtual('url')
            .get(function() {
                return 'category/productinstance' + this._id;
            });

module.exports = mongoose.model('Product', ProductInstanceSchema);*/