import { Container, Form , Background } from "./styles";
import { FiMail, FiLock } from 'react-icons/fi';

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SingIn(){
    return(
        <Container>
            <Form>
                <div>
                    <h1>
                        RocketMovies
                    </h1>

                    <p>
                        Aplicação para acompanhar tudo que assistir.
                    </p>

                    <h2>
                        Faça seu login
                    </h2>
                </div>

                <Input type='text' placeholder="E-mail" icon={ FiMail } />
                <Input type='password' placeholder="Senha" icon={ FiLock } />

                <Button title="Entrar"></Button>
                
                <a href="/">Criar conta</a>
            </Form>

            <Background />
        </Container>
    )
}