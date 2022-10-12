// import { createContext, Dispatch, SetStateAction, useState } from "react";

// type Props = {
//   children: React.ReactNode;
// };

// type Context = {
//   darkMode: boolean;
//   setDarkMode: Dispatch<SetStateAction<Context>>;
// };

// const initialContext: Context = {
//   darkMode: false,
//   setDarkMode: (): void => {
//     throw new Error("setDarkMode function must be overridden");
//   },
// };

// export const DarkModeContext = createContext<Context>(initialContext);

// export const DarkModeProvider = ({ children }: Props): JSX.Element => {
//   const [darkMode, setDarkMode] = useState<Context>(initialContext);

//   return (
//     <DarkModeContext.Provider value={{ ...darkMode, setDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };

import { createContext, useState } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = props => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
            {props.children}
        </DarkModeContext.Provider>
    )
}