import React from "react";
import "./App.css";
import ColorPickerCard from "./components/ColorPickerCard";
import { ColorContext } from "provider/Color";

const App: React.FC = (): JSX.Element => {
  const { color } = React.useContext(ColorContext);
  return (
    <div className="wrapper" style={{ backgroundColor: color }}>
      <ColorPickerCard />
    </div>
  );
};

export default App;
