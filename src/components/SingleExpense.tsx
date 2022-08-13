import { FC } from "react"
import { CloseButton, ListGroup } from "react-bootstrap"
import { IExpenses } from "../types/interfaces"

interface ISingleExpensePorps {
  expense : IExpenses
}

const SingleExpense:FC<ISingleExpensePorps> = (props) => {
  const {expense} = props
  return (
    <ListGroup.Item className="d-flex align-items-center">
        <h5>{expense.name}</h5>
        <p className="ms-auto me-4 mb-0">${expense.cost}</p>
       <CloseButton style={{backgroundColor:'#a0f9f9'}}/>
      </ListGroup.Item>
  )
}

export default SingleExpense