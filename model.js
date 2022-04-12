var dynamoose = require('dynamoose');
var Schema = dynamoose.Schema;

const ProductSchema = new dynamoose.Schema({
    id: {
        type: String,
        hashKey: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    quantity : {
        type: Number,
        required: true
    }
});

var exports = module.exports = {};
exports = dynamoose.model("Product",ProductSchema);