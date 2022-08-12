import { Alert, Button, Col, Row } from "react-bootstrap"


const BudgetInfo = () => {
  return (
    <Row className=" justify-content-center">
        <Col lg={4}>
          <Alert variant="primary" className="d-flex align-items-center">
            <p>Budget: $2000</p>
            <Button className="ms-auto">Edit</Button>
          </Alert>
        </Col>
        <Col lg={4}>
        <Alert variant="success" className="d-flex align-items-center">
            <p>Remaining: $2000</p>
          </Alert>
        </Col>
        <Col lg={4}>
        <Alert variant="danger" className="d-flex align-items-center">
            <p>Spent: $2000</p>
          </Alert>
        </Col>
    </Row>
  )
}

export default BudgetInfo