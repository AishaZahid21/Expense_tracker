import './App.css';
// import AccountSummary from './components/AccountSummary';
import Header from "./components/Header"
import Balance from "./components/Balance"
import AccountSummary from "./components/AccountSummary"
import TransactionHistory from "./components/TransactionHistory"
import AddTransaction from "./components/AddTransaction"

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
