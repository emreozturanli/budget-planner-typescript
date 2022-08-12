import { Form, ListGroup } from "react-bootstrap"
import SingleExpense from "./SingleExpense"

const Expenses = () => {
  return (
    <>
    <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
    <ListGroup className="my-3">
      <SingleExpense/>
      <SingleExpense/>
      <SingleExpense/>
      <SingleExpense/>
    </ListGroup>
  </>
  )
}

export default Expenses