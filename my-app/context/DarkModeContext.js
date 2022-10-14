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

import { createContext, useEffect, useState } from 'react';

const DARK_MODE_KEY = "darkMode";
const DEFAULT_MODE = false;

export const DarkModeContext = createContext();

export const DarkModeProvider = props => {
    // check localStorage only when NextJS running client side

    // const previousMode = () => {
    //     if (typeof window !== 'undefined') {
    //         const storage = localStorage.getItem(DARK_MODE_KEY);
    //         console.log({ storage })
    //         if (storage) {
    //             return JSON.parse(storage);
    //         } else {
    //             return DEFAULT_MODE;
    //         }

    //     }

    //     else {
    //         return DEFAULT_MODE;
    //     }
    // }

    const [darkMode, setDarkMode] = useState(DEFAULT_MODE
        // () => {
        //     return previousMode();

        // }
    );

    // Update localStorage when updating light/dark mode
    useEffect(() => {
        localStorage.setItem(DARK_MODE_KEY, darkMode);
    }, [darkMode])

    return (
        <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
            {props.children}
        </DarkModeContext.Provider>
    )

}