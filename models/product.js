const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        /*description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
        },
        product_type: {
            type: String,
            required: true
        },
        vendor: {
            type: String,
            required: true
        },
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
        },*/
    }
);

ProductSchema.virtual('url')
            .get(function() {
                return 'category/product' + this._id;
            });

module.exports = mongoose.model('Product', ProductSchema);
