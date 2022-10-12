import { createContext, Dispatch, SetStateAction, useState } from "react";

// type Props = {
//   children: React.ReactNode;
// };

// type Context = {
//   countries: [];
//   setCountries: Dispatch<SetStateAction<Context>>;
// };

// const initialContext: Context = {
//   countries: [],
//   setCountries: (): void => {
//     throw new Error("setCountries function must be overridden");
//   },
// };

// export const CountriesContext = createContext<Context>(initialContext);

// export const CountriesProvider = ({ children }: Props): JSX.Element => {
//   const [countries, setCountries] = useState<Context>(initialContext);

//   return (
//     <CountriesContext.Provider value={{ ...countries, setCountries }}>
//       {children}
//     </CountriesContext.Provider>
//   );
// };

export const CountriesContext = createContext();

export const CountriesProvider = (props) => {
  const [countries, setCountries] = useState([]);

  return (
    <CountriesContext.Provider value={[countries, setCountries]}>
      {props.children}
    </CountriesContext.Provider>
  );
};
