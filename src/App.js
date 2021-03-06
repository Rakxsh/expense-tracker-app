import logo from './logo.svg';
import './App.css';
import './components/Header'
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import {GlobalProvider} from 

function App() {
  return (
    <div >
     <Header/>
     <div className="container">
      <Balance/> 
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
     </div>
     
    </div>
  );
}

export default App;
