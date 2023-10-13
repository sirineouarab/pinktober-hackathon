import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Story from "../components/Story";
import "./testimonials.css";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  const API = import.meta.env.VITE_API_URL + "testimonials";

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        {testimonials.map((testimonial, index) => (
          <Story
            key={index}
            title={testimonial.title}
            text={testimonial.text}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Testimonials;
