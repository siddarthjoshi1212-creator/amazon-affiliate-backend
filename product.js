const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  price: String,
  affiliateLink: String,
  category: String,
  isFeatured: Boolean,
  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Product', ProductSchema);
