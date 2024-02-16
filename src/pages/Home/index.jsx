import { Container, Content, TitlePage } from './styles';
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button'
import { Card } from '../../components/Card';


export function Home(){
    return(
        <Container>
            <Header />

            <TitlePage>
                <h2>Meus filmes</h2>
                <Link to="/createmovie">
                    <Button icon={FiPlus} title='Adicionar Filme' />
                </Link>
            </TitlePage>

            <Content>
                <Card />
                <Card />
                <Card />
            </Content>

        </Container>
    )
}