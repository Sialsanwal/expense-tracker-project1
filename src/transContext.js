import {createContext} from 'react';

const initialTransactions = [
    { amount: 200, desc: "Cash" },
    { amount: -40, desc: "Book" },
    { amount: 600, desc: "Camera" }
]

export const TransactionContext= createContext(initialTransactions);