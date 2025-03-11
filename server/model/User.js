const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Name is required
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String }
});

module.exports = mongoose.model('User', UserSchema);
