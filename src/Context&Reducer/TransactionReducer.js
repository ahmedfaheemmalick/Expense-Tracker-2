const TransactionReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANS':
            return { ...state, Transactions: [action.payload, ...state.Transactions] }

        case 'DELETE_TRANS':
            return { ...state, Transactions: state.Transactions.filter(transaction => transaction.id !== action.payload) }

        default:
            return state
    }
}

export default TransactionReducer