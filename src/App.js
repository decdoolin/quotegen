import { useState, useEffect } from "react";
import api from "./api";

function App() {
  const[quote, setQuote] = useState(null);

  useEffect(() => {
    fetchQuote();
  }, []);

  async function fetchQuote() {
    const response = await api.quoteable.getQuote({limit: 10});
    const data = await response.json();
    setQuote(data);
  }

  return (
    <div className="container" style = {{ textAlign: "center", marginTop: "50px"}}>
    <h1>Random Quote Generator</h1>
    {quote ? (
      <div> 
        <p style= {{ fontSize: "1.5rem"}}>"{quote.content}"</p>
        <p style={{fontStyle: "italic" }}>- {quote.author}</p>
      </div>
    ) : (
      <p>Loading...</p>
    )}
    <button onClick={fetchQuote} style={{ marginTop: "20px", padding: "10px 20px"}}>
    Get New Quote
    </button>
    </div>
  );
  }
export default App;
