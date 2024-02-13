import { Container, Content, TitlePage } from './styles';
import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header';
import { Button } from '../../components/Button'
import { Card } from '../../components/Card';


export function Home(){
    return(
        <Container>
            <Header />

            <TitlePage>
                <h2>Meus filmes</h2>
                <Button icon={FiPlus} title='Adicionar Filme' />
            </TitlePage>

            <Content>
                <Card />
                <Card />
                <Card />
            </Content>

        </Container>
    )
}