import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./chatbot.css";
import { Configuration, OpenAIApi } from "openai";

function Chatbot() {
  const [inputValue, setInputValue] = useState("");
  const [outputText, setOutputText] = useState(
    "Welcome to our Breast Cancer Awareness Chatbot. Were here to assist you with any questions or concerns you may have about breast cancer, early detection, and related topics. How can we assist you today?"
  );

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const handleSendClick = async () => {
    setInputValue("");
    event.preventDefault();
    setOutputText("Loading...");
    if (inputValue) {
      const userInput = inputValue;
      try {
        const response = await fetchBotReply(userInput);
        setOutputText(response.data.choices[0].text.trim());
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const fetchBotReply = async (outline) => {
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: outline,
        max_tokens: 60,
      });
      return response;
    } catch (error) {
      console.error("Error fetching bot reply:", error);
      throw error;
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="section" id="setup-container">
          <div className="setup-inner">
            <div className="speech-bubble-ai" id="speech-bubble-ai">
              <p id="chatbot-text">{outputText}</p>
            </div>
          </div>
          <div id="setup-input-container">
            <form
              onSubmit={handleSendClick}
              className="setup-inner setup-input-container"
            >
              <textarea
                id="setup-textarea"
                placeholder="Send a message"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendClick(e);
                  }
                }}
              ></textarea>
              <button
                type="submit"
                className="send-btn"
                id="send-btn"
                aria-label="send"
              >
                <img src="send-btn-icon.png" alt="send" />
              </button>
            </form>
          </div>
        </section>

        <section className="section output-container" id="output-container">
          <div id="output-img-container" className="output-img-container"></div>
          <h1 id="output-title"></h1>
          <h2 id="output-stars"></h2>
          <p id="output-text">{outputText}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Chatbot;
