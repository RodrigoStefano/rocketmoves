import { Link } from "react-router-dom";
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiUnlock } from 'react-icons/fi'

import { Container, Form, Avatar } from "./styles";
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                <FiArrowLeft /> Voltar
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/RodrigoStefano.png" alt="Imagem do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input type="file" id="avatar"/>
                    </label>
                </Avatar>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                 <Input 
                    placeholder="E-mail"
                    type="email"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiUnlock}
                />

                <Input 
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiUnlock}
                />

                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}