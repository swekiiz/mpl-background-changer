import React, { createContext, useMemo, useState, ReactNode } from "react";

type ContextType = {
  color: string;
  setColor: (color: string) => void;
};

export const ColorContext: React.Context<ContextType> = createContext(
  {} as ContextType
);

export const ColorProvider: React.FC = ({
  children,
}: React.PropsWithChildren<ReactNode>): JSX.Element => {
  const [color, setColorState] = useState<string>("#ffffff");
  const setColor = (color: string) => setColorState(color);

  const value = useMemo(
    () => ({
      color,
      setColor,
    }),
    [color]
  );

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
