import { createContext, useContext } from "react";

// in this createContext parameter will also give
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

// Here will create an custom hook called useTheme()
export default function useTheme() {
    return useContext(ThemeContext)
}

// Important Note:-
/* Here we done the context API work in this single .js file only
    1. ThemeContext
    2. ThemeProvider
 Additionally we here added a Custom Hook named useTheme(), in this hook we returned the ThemeContext directly  */