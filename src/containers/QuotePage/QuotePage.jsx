import React, { useState } from 'react';
import Quote from '../../components/Quote';
import quotes from '../../data/quotes';

const getQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

function QuotePage() {
  const [quoteObj, setQuote] = useState(getQuote());

  const randomQuoteHandler = () => {
    setQuote(getQuote());
  };

  return (
    <main className="page-quote">
      <div className="row">
        <div className="quote-page-container">
          <h2>Quote for the day.</h2>
          <Quote quoteObj={quoteObj} />
        </div>
        <button
          type="button"
          className="random-quote-btn"
          onClick={randomQuoteHandler}
        >
          Get a random quoute
        </button>
      </div>
    </main>
  );
}

export default QuotePage;
