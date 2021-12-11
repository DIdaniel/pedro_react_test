import React, { useState } from "react";

const Buttons = () => {
  const [showAnotherButton, setShowAnotherButton] = useState(false);

  return (
    <div>
      <button
        data-testid="button"
        onClick={() => {
          setShowAnotherButton(true);
        }}
      >
        CLICK HEREEEEE
      </button>
      {showAnotherButton && <button data-testid="button">CLICK HEREEEE2</button>}
    </div>
  );
};

export default Buttons;
