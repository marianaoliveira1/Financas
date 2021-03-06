import { Container } from "../Summary/style";
import icomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useContext } from "react";
import { TransactionsContext } from "../Hooks/TransactionsContext";

export function Summary() {
  const {transactions} = useContext(TransactionsContext);

    return(
      <Container>
        <div>
          <header>
            <p>Entratas</p>
            <img src={icomeImg} alt="icone de entrada" />
          </header>
          <strong>6.000.00</strong>
        </div>
        <div>
          <header>
            <p>Saidas</p>
            <img src={outcomeImg} alt="icone de entrada" />
          </header>
          <strong> - 1100.00</strong>
        </div>
        <div className="total">
          <header>
            <p>Total</p>
            <img src={totalImg} alt="icone de entrada" />
          </header>
          <strong> 4900.00</strong>
        </div>

      </Container>

    );
}