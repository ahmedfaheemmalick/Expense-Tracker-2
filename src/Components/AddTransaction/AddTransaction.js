import { useState, useContext } from 'react'
import TransactionContext from '../../Context&Reducer/TransactionContext'
import styles from './AddTransaction.module.css'

const AddTransaction = () => {

    const { addTrans } = useContext(TransactionContext)

    const [transName, setTransName] = useState('')
    const [transAmount, setTransAmount] = useState('')

    const handleSubmit = e => {
        e.preventDefault();

        (!transName || !transAmount) ? alert('Please enter correct data') : addTrans(transName, transAmount)

        setTransName('')
        setTransAmount('')
    }


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={transName}
                    required
                    placeholder='Transaction Name'
                    onChange={e => setTransName(e.target.value)}
                />
                <input
                    type='number'
                    value={transAmount}
                    required
                    placeholder='Transaction Amount'
                    onChange={e => setTransAmount(e.target.value)}
                />
                <br />
                <button className={styles.btn}>ADD TRANSACTION</button>
            </form>
        </div>
    )
}

export default AddTransaction
