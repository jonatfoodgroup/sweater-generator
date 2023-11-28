import React, { useEffect } from 'react';


const Snow = () => {
  useEffect(() => {
    const snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach((snowflake) => {
      const randomBlue = Math.floor(Math.random() * 256);
      const randomOpacity = Math.random();
      const randomSize = Math.floor(Math.random() * 150) + 75; // Random size between 5 and 25 pixels
      snowflake.style.color = `rgba(0, 0, ${randomBlue}, ${randomOpacity})`;
      snowflake.style.fontSize = `${randomSize}px`;
    });
  }, []); // Run the effect only once when the component mounts

  return (
    <>
      <div className="snowflakes" aria-hidden="true">
      <div className="snowflake rotate">❅</div>
        <div className="snowflake rotate">❆</div>
        <div className="snowflake rotate">❅</div>
        <div className="snowflake rotate">❆</div>
        <div className="snowflake rotate">❅</div>
        <div className="snowflake rotate">❆</div>
        <div className="snowflake rotate">❅</div>
        <div className="snowflake rotate">❆</div>
        <div className="snowflake rotate">❅</div>
        <div className="snowflake rotate">❆</div>
        <div className="snowflake rotate">❅</div>
        <div className="snowflake rotate">❆</div>
      </div>
    </>
  );
};

export default Snow;
