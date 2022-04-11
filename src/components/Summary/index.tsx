import { Container } from "../Summary/style";
import icomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
    return(
      <Container>
        <div>
          <header>
            <p>Entratas</p>
            <img src={icomeImg} alt="icone de entrada" />
          </header>
          <strong>1.000.00</strong>
        </div>
        <div>
          <header>
            <p>Saidas</p>
            <img src={outcomeImg} alt="icone de entrada" />
          </header>
          <strong> - 500.00</strong>
        </div>
        <div className="total">
          <header>
            <p>Total</p>
            <img src={totalImg} alt="icone de entrada" />
          </header>
          <strong> 500.00</strong>
        </div>

      </Container>

    );
}