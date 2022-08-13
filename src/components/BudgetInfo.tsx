import { useContext} from "react"
import { Alert, Button, Col, Row } from "react-bootstrap"
import { ExpenseContext } from "../context/expenseContext"

const BudgetInfo = () => {
  const {budget,expenses} = useContext(ExpenseContext)

  const spent = expenses.reduce((total,item)=> total + item.cost,0);
  const remaining = budget - spent;
  
  return (
    <Row className=" justify-content-center">
        <Col lg={4}>
          <Alert variant="primary" className="d-flex align-items-center">
            <p>Budget: ${budget}</p>
            <Button className="ms-auto">Edit</Button>
          </Alert>
        </Col>
        <Col lg={4}>
        <Alert variant="success" className="d-flex align-items-center">
            <p>Remaining: ${remaining}</p>
          </Alert>
        </Col>
        <Col lg={4}>
        <Alert variant="danger" className="d-flex align-items-center">
            <p>Spent: ${spent}</p>
          </Alert>
        </Col>
    </Row>
  )
}

export default BudgetInfo