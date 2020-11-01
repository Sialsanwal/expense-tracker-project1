import React,{createContext,useReducer} from 'react';
import TransactionReducer from './transReducer';

const initialTransactions = [
    { amount: 200, desc: "Cash" },
    { amount: -50, desc: "Book" },
    { amount: 600, desc: "Cold Drink" },
    { amount: -200, desc: "Utlity Bill" }
]

export const TransactionContext= createContext(initialTransactions);
 


export const TransactionProvider= ({children})=>{
    let [state, dispatch]= useReducer(TransactionReducer,initialTransactions)
        function addTransaction(transObj){
                dispatch({
                    type: "ADD_TRANSACTION",
                    payload:
                        { 
                        amount:transObj.amount ,
                         desc: transObj.desc 
                        },

                })
        }
    return(
        <TransactionContext.Provider  value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}