import { Button, Form } from "react-bootstrap"

const AddExpense = () => {
  return (
    <Form >
      <Form.Group className="mb-3" controlId="expense">
        <Form.Label>Expense</Form.Label>
        <Form.Control type="text" placeholder="Type an expense" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="cost">
        <Form.Label>Cost</Form.Label>
        <Form.Control type="number" placeholder="Type the cost" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  )
}

export default AddExpense