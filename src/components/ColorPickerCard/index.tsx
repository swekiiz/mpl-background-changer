import React, { useContext } from "react";
import styles from "./ColorPickerCard.module.css";
import { HEX2RGB, RGB2HSV, randomColor, RGB2HEX } from "utils/color";
import Button from "components/Button";
import { ColorContext } from "provider/Color";

const insideColor = ({
  h,
  s,
  v,
}: {
  h: number;
  s: number;
  v: number;
}): string => {
  return `hsl(${(h + 180) % 360}, ${Math.abs(100 - s)}%, ${Math.abs(
    100 - v
  )}%)`;
};

const ColorPickerCard: React.FC = (): JSX.Element => {
  const { color, setColor } = useContext(ColorContext);
  const RGB_Color = HEX2RGB(color);
  const HSV_Color = RGB2HSV(RGB_Color);
  const { red: r, green: g, blue: b } = RGB_Color;

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        rgb({r}, {g}, {b})
      </h1>
      <div style={{ backgroundColor: color }} className={styles.color}>
        <input
          type="color"
          className={styles.input}
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
        <div className={styles.text} style={{ color: insideColor(HSV_Color) }}>
          Click here
        </div>
      </div>
      <Button onClick={() => setColor(RGB2HEX(randomColor()))}>random</Button>
    </div>
  );
};

export default ColorPickerCard;
