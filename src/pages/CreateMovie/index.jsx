import { Container, BackPage, Content } from "./styles";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiPlus, FiX } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from '../../components/Button'

export function CreateMovie(){
    return(
        <Container>
            <Header />

            <BackPage>
                <Link to="/">
                    <FiArrowLeft /> Voltar
                </Link>
            </BackPage>

            <Content>
                <h2>Novo filme</h2>
                <div id="inputs">
                    <Input
                        placeholder="Título"
                    />
                    <Input
                        placeholder="Sua nota (de 0 a 5)"
                    />
                </div>

                <textarea placeholder="Observações" cols="30" rows="10" ></textarea>

                <section>
                    <h3>Marcadores</h3>
                    
                    <div id="tags">
                        <button>React <FiX /></button>
                        <button className="isNew">Novo marcador <FiPlus /></button>
                    </div>

                    <div id="buttons">
                        <button id="delete">Excluir filme</button>
                        <Button title="Salvar alterações" />
                    </div>
                </section>
                
            </Content>

        </Container>
    )
}