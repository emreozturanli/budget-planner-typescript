import { useContext, useState } from "react"
import { Form, ListGroup } from "react-bootstrap"
import { ExpenseContext } from "../context/expenseContext"
import SingleExpense from "./SingleExpense"

const Expenses = () => {
  const [search,setSearch] = useState('')
  const {expenses} = useContext(ExpenseContext)

  const filteredExpenses = expenses.filter(e=> e.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
    <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e)=> setSearch(e.target.value)}
            />
    <ListGroup className="my-3">
      {
        search 
        ? filteredExpenses.map(e=> <SingleExpense key={e.id} expense={e}/>)
        : expenses.map(e=> <SingleExpense key={e.id} expense={e}/>)
      }
    </ListGroup>
  </>
  )
}

export default Expenses