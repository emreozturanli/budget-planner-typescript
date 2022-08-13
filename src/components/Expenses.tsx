import { useContext } from "react"
import { Form, ListGroup } from "react-bootstrap"
import { ExpenseContext } from "../context/expenseContext"
import SingleExpense from "./SingleExpense"

const Expenses = () => {
  const {expenses} = useContext(ExpenseContext)
  return (
    <>
    <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
    <ListGroup className="my-3">
      {
        expenses.map(e=> <SingleExpense key={e.id} expense={e}/>)
      }
    </ListGroup>
  </>
  )
}

export default Expenses