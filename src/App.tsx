import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransaction } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {
  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function hanleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function hanleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={hanleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransaction isOpen={isNewTransactionModalOpen} onRequestClose={hanleCloseNewTransactionModal} />
      <GlobalStyle />
    </>

  );
}

