import React from 'react';

function Quote({ quoteObj }) {
  const { quote, by, bgColor } = quoteObj;
  return (
    <div
      className="math-quote"
      style={{ backgroundColor: bgColor || '#fff' }}
    >
      <p className="quote-text">{quote}</p>
      <span className="by">
        By:
        {' '}
        <span className="name">{by}</span>
        {' '}
      </span>
    </div>
  );
}

export default Quote;
