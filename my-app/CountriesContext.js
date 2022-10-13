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
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <CountriesContext.Provider value={{
      countriesValue: [countries, setCountries],
      keywordValue: [keyword, setKeyword],
      loadingValue: [isLoading, setIsLoading]
    }}>
      {props.children}
    </CountriesContext.Provider>
  );
};
