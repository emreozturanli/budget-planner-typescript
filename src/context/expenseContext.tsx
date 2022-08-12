import { createContext, ReactNode} from "react";
import { IExpenseContext } from "../types/interfaces";

interface ExpenseContextProps {
    children: ReactNode
}

export const ExpenseContext = createContext({} as IExpenseContext);

export const ExpenseContextProvider = ({children}:ExpenseContextProps) => {

    return <ExpenseContext.Provider value={{}}>
        {children}
    </ExpenseContext.Provider>
}