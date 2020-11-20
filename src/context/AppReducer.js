export default (state, action) => {
    switch (action.type) {
        case "DELETE_TRANSACTION":
            return {
                //we will use spread operator which simply expands our string/object/array in JS
                //but in react it reduce 
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !==
                    action.payload)
            }
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state
    };
}