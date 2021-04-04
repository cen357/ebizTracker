/*const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TypeSchema = new Schema (
    {
        product_type: {
            type: String,
            required: true
        },
        vendor: {
            type: String,
            required: true
        },
    }
);

TypeSchema.virtual('url')
            .get(function() {
                return 'category/type' + this._id;
            });

module.exports = mongoose.model('Type', TypeSchema);
*/