export interface IExpenseContext {
    expenses: IExpenses[]
    budget: number
    dispatch: React.Dispatch<IAction>
}

export interface IExpenses {
    id: number
    name: string
    cost: number
}

export interface IState {
    budget : number
    expenses : IExpenses[]
}

export interface IAction {
    type: string
    payload: IExpenses | number
}