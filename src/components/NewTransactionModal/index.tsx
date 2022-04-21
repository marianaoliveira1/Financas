import Modal from 'react-modal';
import { Container} from './style';
import closeImg from '../../assets/close.svg';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransaction({
    isOpen, onRequestClose
} : NewTransactionModalProps) {
    return (
        <Modal isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button type='button' onClick={onRequestClose} className='react-modal-close'>
                <img src={closeImg} alt="fechar o modal" />
            </button>
        <Container>
            <h2>Cadastrar transação</h2>
            <input placeholder='Titulo' />
            <input placeholder='Valor' type="number" />
            <input placeholder='Categoria' />
            <button type='submit'>Cadastrar</button>
        </Container>
     </Modal> 
    );
}