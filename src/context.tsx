import { Dispatch, useReducer } from "react";
import { createContext,PropsWithChildren } from "react";
import { AdjustColorAction, colorReducer, initialState } from "./color-reducers";

type ColorContextState = {
    hexColor:string;
    dispatch:Dispatch<AdjustColorAction>;
}
export const ColorContext = createContext<ColorContextState>({ hexColor:"#BADA55" } as ColorContextState);

export const ColorProvider = ({ children } : PropsWithChildren ) => {
    const [{ hexColor },dispatch] = useReducer(colorReducer,initialState);
    
    return <ColorContext.Provider value={{ hexColor, dispatch }}>{ children }</ColorContext.Provider>
}