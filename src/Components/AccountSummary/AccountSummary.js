import { useContext } from 'react'
import TransactionContext from '../../Context&Reducer/TransactionContext'
import styles from './AccountSummary.module.css'

const AccountSummary = () => {

    const { Transactions } = useContext(TransactionContext)

    const transactionAmounts = Transactions.map(transaction => transaction.amount)

    const balance = transactionAmounts.reduce((acc, item) => acc += item, 0).toFixed(2)

    const income = transactionAmounts
        .filter(amount => amount > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = transactionAmounts
        .filter(amount => amount < 0)
        .reduce((acc, item) => acc += item, 0)
        .toFixed(2)


    return (
        <div>
            <div className={styles.bal_cont}>
                <span>Balance</span>
                <span>${balance}</span>
            </div>
            <div className={styles.inc_exp_cont}>
                <div className={styles.inc_cont}>
                    <p>Expense</p>
                    <p className={styles.minus}>${expense}</p>
                </div>
                <div className={styles.exp_cont}>
                    <p>Income</p>
                    <p className={styles.plus}>${income}</p>
                </div>
            </div>
        </div>
    )
}

export default AccountSummary
