import './App.css';
import AccountSummary from './components/accountSummary';
import AddTransaction from './components/addTransaction';
import Balance from './components/balance';
import Header from './components/header';
import TransactionHistory from './components/transactionHistory';

function App() {
  return (
    <div>
      <Header />
      <div className="container"></div>
      <Balance />
      <AccountSummary />
      <TransactionHistory />
      <AddTransaction/>
    </div>
  );
}

export default App;
