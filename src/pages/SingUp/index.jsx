import { Container, Form , Background } from "./styles";
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SingUp(){
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
                        Crie sua conta
                    </h2>
                </div>

                <Input type='text' placeholder="Nome" icon={ FiUser } />
                <Input type='text' placeholder="E-mail" icon={ FiMail } />
                <Input type='password' placeholder="Senha" icon={ FiLock } />

                <Button title="Cadastrar"></Button>
                
                <a href="/"><FiArrowLeft /> Voltar para o login</a>
            </Form>

            <Background />
        </Container>
    )
}