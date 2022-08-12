import { CloseButton, ListGroup } from "react-bootstrap"


const SingleExpense = () => {
  return (
    <ListGroup.Item className="d-flex align-items-center">
        <h5>Expense-1</h5>
        <p className="ms-auto me-4 mb-0">$500</p>
       <CloseButton style={{backgroundColor:'#a0f9f9'}}/>
      </ListGroup.Item>
  )
}

export default SingleExpense