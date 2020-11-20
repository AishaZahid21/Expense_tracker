import './App.css';
// import AccountSummary from './components/AccountSummary';
import Header from "./components/header"

import  { GlobalProvider } from "./context/GlobalState"
function App() {
  return (
    <GlobalProvider>
    <div>
      <Header />
      <div className="container"></div>
      {/* <Balance /> */}
      {/* <AccountSummary /> */}
      {/* <TransactionHistory /> */}
      {/* <AddTransaction /> */}
      </div>
      </GlobalProvider>
  );
}

export default App;
