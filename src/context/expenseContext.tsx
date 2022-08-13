import { createContext, ReactNode, useReducer } from "react";
import { IExpenseContext, IState } from "../types/interfaces";
import { reducer } from "./reducer";

interface ExpenseContextProps {
    children: ReactNode
}

const initialState: IState = {
    budget: 2000,
    expenses: [
        { id: Math.random(), name: 'Shopping', cost: 50 },
        { id: Math.random(), name: 'Holiday', cost: 300 },
        { id: Math.random(), name: 'Transportation', cost: 70 },
    ]
}

export const ExpenseContext = createContext({} as IExpenseContext);

export const ExpenseContextProvider = ({ children }: ExpenseContextProps) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return <ExpenseContext.Provider
        value={{
            expenses: state.expenses,
            budget: state.budget,
            dispatch
        }}
        >
        {children}
    </ExpenseContext.Provider>
}