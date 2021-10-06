import { createContext, useContext } from "react";

export const DarkMode = createContext(null);

export const useDarkMode = ()=>{
    return useContext(DarkMode)
}