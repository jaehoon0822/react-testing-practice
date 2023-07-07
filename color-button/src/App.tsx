import React, { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState<String>("blue");
  const buttonStyle: React.CSSProperties = useMemo(
    () => ({
      backgroundColor: buttonColor === "red" ? "blue" : "red",
      color: "white",
    }),
    [buttonColor]
  );

  const onClickButton = () => {
    setButtonColor((prev) => (prev === "red" ? "blue" : "red"));
  };

  return (
    <div>
      <button style={buttonStyle} onClick={onClickButton}>
        {`change to ${buttonColor}`}
      </button>
    </div>
  );
}

export default App;
