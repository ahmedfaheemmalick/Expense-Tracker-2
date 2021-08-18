import { useReducer } from 'react'
import firebase from './firebase'
import Header from './Components/Header/Header'
import AccountSummary from './Components/AccountSummary/AccountSummary'
import TransactionList from './Components/TransactionList/TransactionList'
import AddTransaction from './Components/AddTransaction/AddTransaction'
import TransactionContext from './Context&Reducer/TransactionContext'
import TransactionReducer from './Context&Reducer/TransactionReducer'
import Transactions from './Data'
import styles from './App.module.css'

const App = () => {

  const msg = firebase.messaging()

  msg.requestPermission().then(() => {
    return msg.getToken()
  }).then(token => {
    console.log('token', token)
  })

  const [state, dispatch] = useReducer(TransactionReducer, { Transactions: Transactions })

  const addTrans = (transName, transAmount) => {
    const newTrans = { id: state.Transactions.length + 1, name: transName, amount: +transAmount }
    dispatch({ type: 'ADD_TRANS', payload: newTrans })
  }

  const deleteTrans = id => {
    dispatch({ type: 'DELETE_TRANS', payload: id })
  }

  return (
    <div className={styles.container}>
      <TransactionContext.Provider value={{ Transactions: state.Transactions, addTrans, deleteTrans }}>
        <Header />
        <AccountSummary />
        <TransactionList />
        <AddTransaction />
      </TransactionContext.Provider>
    </div>
  )
}

export default App