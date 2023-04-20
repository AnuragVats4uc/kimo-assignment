import { ReactNode, createContext, useState } from "react";

export type ContextProps = {
  data: any;
  setData: any;
};

export const AppContext = createContext<ContextProps>({
  data: null,
  setData: undefined,
});

export type Props = {
  children: ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  const [data, setData] = useState({
    highlight: null,
    categories: null,
    activities: null,
  });
  const contextValue = { data, setData };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
