import { useContext, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { ExpenseContext } from "../context/expenseContext"

const AddExpense = () => {
  const [expense, setExpense] = useState('')
  const [cost, setCost] = useState('')
  const {dispatch} = useContext(ExpenseContext)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const newExpense = {
      id: Math.random(),
      name: expense,
      cost: +cost
    };
    dispatch({type:'ADD_EXPENSE', payload: newExpense});
    setCost('');
    setExpense('');
  }

  return (
    <Form onSubmit={handleSubmit} className='mb-3'>
      <Form.Group className="mb-3" controlId="expense">
        <Form.Label className="fw-semibold">Expense</Form.Label>
        <Form.Control
          type="text"
          placeholder="Type an expense"
          value={expense}
          onChange={e=> setExpense(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="cost">
        <Form.Label className="fw-semibold">Cost</Form.Label>
        <Form.Control
          type="number"
          placeholder="Type the cost"
          value={cost}
          onChange={e=> setCost(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  )
}

export default AddExpense