import React, { useMemo, useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName: string) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [buttonColor, setButtonColor] = useState<String>("blue");

  const buttonStyle: React.CSSProperties = useMemo(() => {
    const bgColor = buttonColor === "red" ? "blue" : "red";

    return {
      backgroundColor: isDisabled ? "gray" : bgColor,
      color: "white",
    };
  }, [buttonColor, isDisabled]);

  const onClickCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDisabled((_prev) => e.target.checked);
  };

  const onClickButton = () => {
    setButtonColor((prev) => (prev === "red" ? "blue" : "red"));
  };

  return (
    <div>
      <button style={buttonStyle} onClick={onClickButton} disabled={isDisabled}>
        {`change to ${buttonColor}`}
      </button>
      <div>
        <label htmlFor="disable-btn">disable button</label>
        <input
          type="checkbox"
          onChange={onClickCheckbox}
          defaultChecked={isDisabled}
          aria-checked={isDisabled}
          name="disable-btn"
          id="disable-btn"
        />
      </div>
    </div>
  );
}

export default App;
