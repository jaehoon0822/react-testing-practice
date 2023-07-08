import React, { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [isDesabled, setIsDesabled] = useState<boolean>(false);
  const [buttonColor, setButtonColor] = useState<String>("blue");
  const buttonStyle: React.CSSProperties = useMemo(
    () => ({
      backgroundColor: buttonColor === "red" ? "blue" : "red",
      color: "white",
    }),
    [buttonColor]
  );

  const onClickCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDesabled((_prev) => e.target.checked);
  };

  const onClickButton = () => {
    setButtonColor((prev) => (prev === "red" ? "blue" : "red"));
  };

  return (
    <div>
      <button style={buttonStyle} onClick={onClickButton} disabled={isDesabled}>
        {`change to ${buttonColor}`}
      </button>
      <div>
        <label htmlFor="desable-btn">disable button</label>
        <input type="checkbox" onChange={onClickCheckbox} id="desable-btn" />
      </div>
    </div>
  );
}

export default App;
