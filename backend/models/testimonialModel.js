const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
});

module.exports = mongoose.model("Testimonial", testimonialSchema);
