export const RGB2HEX = ({
  red,
  green,
  blue,
}: {
  red: number;
  green: number;
  blue: number;
}): string => {
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
};

export const HEX2RGB = (
  hex: string
): { red: number; green: number; blue: number } => {
  let red: number, green: number, blue: number;
  try {
    red = parseInt(`${hex[1]}${hex[2]}`, 16);
    green = parseInt(`${hex[3]}${hex[4]}`, 16);
    blue = parseInt(`${hex[5]}${hex[6]}`, 16);
  } catch (e) {
    console.log(e);
    return { red: 0, green: 0, blue: 0 };
  }
  return { red, green, blue };
};

export const RGB2HSV = ({
  red,
  green,
  blue,
}: {
  red: number;
  green: number;
  blue: number;
}): { h: number; s: number; v: number } => {
  let rabs = red / 255,
    gabs = green / 255,
    babs = blue / 255,
    rr: number,
    gg: number,
    bb: number,
    h: number,
    s: number,
    v: number,
    diff: number,
    diffc: (c: number) => number,
    percentRoundFn: (num: number) => number;

  v = Math.max(rabs, gabs, babs);
  diff = v - Math.min(rabs, gabs, babs);

  diffc = (c): number => (v - c) / 6 / diff + 1 / 2;
  percentRoundFn = (num): number => Math.round(num * 100) / 100;

  h = 0;

  if (diff === 0) {
    s = 0;
  } else {
    s = diff / v;
    rr = diffc(rabs);
    gg = diffc(gabs);
    bb = diffc(babs);

    if (rabs === v) {
      h = bb - gg;
    } else if (gabs === v) {
      h = 1 / 3 + rr - bb;
    } else if (babs === v) {
      h = 2 / 3 + gg - rr;
    }

    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }
  return {
    h: Math.round(h * 360),
    s: percentRoundFn(s * 100),
    v: percentRoundFn(v * 100),
  };
};

export const randomColor = (): {
  red: number;
  green: number;
  blue: number;
} => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return { red: r, green: g, blue: b };
};
