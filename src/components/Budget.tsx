import { useState, useContext } from "react"
import { Button, Form, } from "react-bootstrap"
import { ExpenseContext } from "../context/expenseContext"


const Budget = () => {
    const [isEdit, setIsEdit] = useState(false)
    const [newBudget, setNewBudget] = useState('')

    const { budget, dispatch } = useContext(ExpenseContext)

    const changeBudget = () => {
        dispatch({ type: 'SET_BUDGET', payload: +newBudget })
        setIsEdit(false)
    }
    return (
        <>
            {
                !isEdit
                    ? <>
                        <p className="mb-0">Budget: ${budget}</p>
                        <Button className="ms-auto" onClick={() => setIsEdit(true)}>Edit</Button>
                    </>
                    : <>
                        <Form.Control
                            className="w-75"
                            type="number"
                            placeholder="Type new budget"
                            value={newBudget}
                            onChange={e => setNewBudget(e.target.value)}
                        />
                        <Button className="ms-auto" onClick={changeBudget}>Save</Button>
                    </>
            }
        </>
    )
}

export default Budget