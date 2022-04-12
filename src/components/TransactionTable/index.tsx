import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionTable() {

    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de app</td>
                        <td className="deposit">15.000</td>
                        <td>Desenvolvimento</td>
                        <td>04/05/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdrow"> -500</td>
                        <td>Desenvolvimento</td>
                        <td>04/05/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}