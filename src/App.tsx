import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import BudgetInfo from './components/BudgetInfo';
import Expenses from './components/Expenses';
import AddExpense from './components/AddExpense';

function App() {
  return (
    <Container>
      <h1 className='text-center m-3'>My Budget</h1>
      <BudgetInfo />
      <h2 className='text-center my-2'>Expenses</h2>
      <Expenses />
      <h2 className='text-center my-2'>Add New Expense</h2>
      <AddExpense />
    </Container>
  );
}

export default App;
