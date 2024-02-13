import { Container } from "./styles";
import { Link } from "react-router-dom";

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
                
                <Link to="/profile" className="imageUser"><img src="https://github.com/RodrigoStefano.png" alt="Imagem do usuário" /></Link>
            </div>
        </Container>
    )
}