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