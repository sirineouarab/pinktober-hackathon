const express = require("express");
const router = express.Router();
const Testimonial = require("../models/testimonialModel");

router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", getTestimonial, (req, res) => {
  res.json(res.testimonial);
});

async function getTestimonial(req, res, next) {
  try {
    console.log("Finding testimonial by ID:", req.params.id);
    const testimonial = await Testimonial.findById(req.params.id);

    if (testimonial == null) {
      console.log("Testimonial not found:", req.params.id);
      return res.status(404).json({ message: "Cannot find testimonial" });
    }

    console.log("Testimonial found:", testimonial);
    res.testimonial = testimonial;
    next();
  } catch (err) {
    console.error("Error finding testimonial:", err);
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
