import React from 'react';

function Content({ handleButtonClick }) {
  return (
    <div>
      <textarea id="textarea" />
      <button onClick={handleButtonClick}>Display Text</button>
    </div>
  );
}

export default Content;
