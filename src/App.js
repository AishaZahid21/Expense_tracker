import './App.css';
import AccountSummary from './components/AccountSummary';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import TransactionHistory from './components/TransactionHistory';

import  { GlobalProvider } from "./context/GlobalState"
function App() {
  return (
    <GlobalProvider>
    <div>
      <Header />
      <div className="container"></div>
      <Balance />
      <AccountSummary />
      <TransactionHistory />
      <AddTransaction />
      </div>
      </GlobalProvider>
  );
}

export default App;
