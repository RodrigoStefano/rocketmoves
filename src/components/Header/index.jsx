import { Container } from "./styles";

import { Input } from "../Input";

export function Header(){
    return(
        <Container>
            <h1>
                RocketMovies
            </h1>

            <Input placeholder="Pesquisar pelo título" />

            <div className="user">
                <div>
                    <strong>
                        Rodrigo Stefano
                    </strong>

                    <a href="/">
                        sair
                    </a>
                </div>
                <img src="https://github.com/RodrigoStefano.png" alt="Imagem do usuário" />
            </div>
        </Container>
    )
}