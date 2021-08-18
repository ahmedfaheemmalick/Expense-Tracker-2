import { useContext } from 'react'
import { ImBin } from "react-icons/im"
import TransactionContext from '../../Context&Reducer/TransactionContext'
import styles from './TransactionItem.module.css'

const TransactionItem = ({ transaction }) => {

    const { deleteTrans } = useContext(TransactionContext)

    return (
        <div className={`${styles.container} ${transaction.amount > 0 ? styles.green_bar : styles.red_bar}`}>
            <div className={styles.left_sect}>
                <span>{transaction.name}</span>
                <br />
                <span>${transaction.amount}</span>
            </div>
            <div className={styles.right_sect}>
                <ImBin className={styles.btn} onClick={() => deleteTrans(transaction.id)} />
            </div>
        </div>

    )
}

export default TransactionItem
