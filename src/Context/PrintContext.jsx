import { createContext, useContext, useState } from "react";

const PrintContex = createContext()

export default function PrintProvider({value = [], children}){
    const [printRow, setPrintRows] = useState(value)
    return(
        <PrintContex.Provider value={{printRow}}>
            {children}
        </PrintContex.Provider>
    )
}

export const usePrintContex = ()=>{
    return useContext(PrintContex)
}