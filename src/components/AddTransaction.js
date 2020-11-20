import React, { useState , useContext}from "react"
import { GlobalContext } from "../context/GlobalState"

const AddTransaction = () => {
    const [text, setText]  = useState('')
    const [amount, setAmount] = useState(0)
    
    const { addTransaction } = useContext(GlobalContext)
    
    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000),
            text,
            //+amount will convert string to number we can aslo use parse
            amount: +amount
        }

        addTransaction(newTransaction)
    }
    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=> setText(e.target.value)}  placeholder="Enter transaction details"/>
                </div>
                <div>
                    <label htmlFor="amount">
                        Amount<br />
                        (negative - expense , positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)}placeholder="Enter amount..."/>
                </div>
                <button className="btn" >Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction