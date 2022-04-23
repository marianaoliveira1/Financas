import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
  
  interface Transactions {
    id: number;
    title: string;
    type: string
    category: string
    amount: number;
    createdAt: string;
  }
  
  type TransactionInput = Omit<Transactions, 'id' | 'createdAt'>
  
  interface TransactionsProviderProps {
    children: ReactNode;
  }
  
  interface TransactionContextData {
    transactions: Transactions[];
    createTransaction: (transaction: TransactionInput) => void;
  }
  
  export const TransactionsContext = createContext<TransactionContextData>(
    {} as TransactionContextData
  );
  
  export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
    const [transactions, setTransactions] = useState<Transactions[]>([]);
  
    useEffect(() => {
      api.get('transactions')
        .then(response => setTransactions(response.data.transactions));
    }, []);
  
    async function createTransaction(transactionInput: TransactionInput) {
      const response = await api.post('/transactions', {
        ...transactionInput,
        createdAt: new Date()
      });
      const { transaction } = response.data;
      setTransactions([...transactions, transaction]);
    }
  
    return (
      <TransactionsContext.Provider value={{ transactions, createTransaction }}>
        {children}
      </TransactionsContext.Provider>
    );
  };
  
  export const useTransactions = () => {
    const contex = useContext(TransactionsContext);
    return contex;
  }

// import { createContext, ReactNode, useEffect, useState } from "react";
// import { api } from "../../services/api";

// interface Transaction {
//     id: number;
//     title: string;
//     amount: number;
//     type: string;
//     category: string;
//     createdAt: string;
// }

// type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

// interface TransactionsProviderProps {
//     children: ReactNode;
// }

// interface TransactionContextData {
//     transaction?: Transaction[];
//     createTransaction: (transaction: TransactionInput) => void;
// }

// export const TransactionsContext = createContext<TransactionContextData>(
//     {} as TransactionContextData
// );

// export function TransactionsProvider({ children } : TransactionsProviderProps) {
//     const [transactions, setTransactions] = useState<Transaction[]>([]);

//     useEffect(() => {
//         api.get('transactions')
//         .then(response => setTransactions(response.data.transactions))
//     }, []);

//     function createTransaction(transaction : TransactionInput) {
//         api.post('/transactions', transaction)
//     }

//     return (
//     <TransactionsContext.Provider value={{transactions, createTransaction }}>
//         {children}
//     </TransactionsContext.Provider>
//     );
// }