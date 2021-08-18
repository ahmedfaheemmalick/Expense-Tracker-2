import { useContext } from 'react'
import TransactionItem from '../TransactionItem/TransactionItem'
import TransactionContext from '../../Context&Reducer/TransactionContext'

const TransactionList = () => {

    const { Transactions } = useContext(TransactionContext)

    return (
        <div>
            {Transactions.map((transaction, index) => (
                <TransactionItem key={index} transaction={transaction} />
            )
            )}
        </div>
    )
}

export default TransactionList
