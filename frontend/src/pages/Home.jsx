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
        <h2>Our Features</h2>
        <div>
          <span> Inspiring Survivor Stories : </span>Explore heartfelt
          testimonials from brave women who have faced breast cancer head-on.
          Their stories of resilience and hope are a testament to the power of
          the human spirit.
        </div>

        <div>
          <span>Educational Resources :</span> Access a wealth of articles,
          guides, and resources about breast cancer, its risk factors, screening
          methods, and treatment options. Knowledge is your best defense against
          this disease.
        </div>

        <div>
          <span>Connect with Our Chatbot : </span>Have questions about breast
          cancer? Our chatbot is here 24/7 to provide answers, offer support,
          and guide you through your journey.
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
