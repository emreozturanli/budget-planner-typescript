import { useContext } from "react"
import { Alert, Col, Row } from "react-bootstrap"
import { ExpenseContext } from "../context/expenseContext"
import Budget from "./Budget"

const BudgetInfo = () => {

  const { budget, expenses } = useContext(ExpenseContext)

  const spent = expenses.reduce((total, item) => total + item.cost, 0);
  const remaining = budget - spent;

  return (
    <Row className=" justify-content-center">
      <Col lg={4}>
        <Alert variant="primary" className="d-flex align-items-center">
          <Budget/>
        </Alert>
      </Col>
      <Col lg={4}>
        <Alert variant="success" className="d-flex align-items-center">
          <p className="mb-0">Remaining: ${remaining}</p>
        </Alert>
      </Col>
      <Col lg={4}>
        <Alert variant="danger" className="d-flex align-items-center">
          <p className="mb-0">Spent: ${spent}</p>
        </Alert>
      </Col>
    </Row>
  )
}

export default BudgetInfo