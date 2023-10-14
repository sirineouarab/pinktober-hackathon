import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./home.css";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div>
          <h1 style={{ color: "#1C1C1C" }}>
            <span>Pink</span> Together, Stronger Forever
          </h1>
          <p>
            to raise awareness about breast cancer, promote early detection,
            provide support, and empower survivors. Together, we can make a
            difference.
          </p>
        </div>
        <img src="woman.png"></img>
      </main>
      <section>
        <h2>OUR FEATURES</h2>
        <div className="div">
          <div className="features">
            <div>
              <img src="pict1.png"></img>
              <br></br>
              <span> Inspiring Survivor Stories </span>
            </div>

            <div>
              <img src="pict2.png"></img> <br></br>
              <span>Educational Resources </span>
            </div>

            <div>
              <img src="pict3.png"></img>
              <br></br>
              <span>Connect with Our Chatbot </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
