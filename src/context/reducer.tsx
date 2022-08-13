import { IAction, IState } from "../types/interfaces";

export const reducer = (state: IState, action: IAction) : any=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case 'REMOVE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(e=>e.id !== action.payload)
            }
        case 'SET_BUDGET':
            return {...state, budget: action.payload}
    }
}