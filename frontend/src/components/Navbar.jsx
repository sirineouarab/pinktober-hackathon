import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <img
          src={isMenuOpen ? "x.png" : "menu.png"}
          onClick={toggleMenu}
          alt="Menu"
        />
        <a href="/">
          <div>
            <img src="Logo.png" alt="Logo" />
          </div>
        </a>
        <nav>
          <a href="/">Home</a>
          <a href="/articles">Articles</a>
          <a href="/chatbot">Chatbot</a>
          <a href="testimonials">Testimonials</a>
        </nav>
      </header>
      <div className={`${isMenuOpen ? "menu" : "hidden"}`}>
        <a href="/">Home</a>
        <a href="/articles">Articles</a>
        <a href="/chatbot">Chatbot</a>
        <a href="testimonials">Testimonials</a>
      </div>
    </>
  );
}

export default Navbar;
