// import { useState } from 'react';
import Header from '../../components/Header';
import { Wrapper, CardsSection, Card, ActionButton } from './styles';
import { MainContainer } from '../../styles/global';

export default function Home() {
  //   const [loading, setLoading] = useState(false);
  const teste = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Wrapper>
      <Header />
      <MainContainer>
        <article style={{}}>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              maxWidth: '600px',
              marginLeft: '3rem',
              marginBottom: '8px',
              backgroundColor: '#182c3e',
              padding: '8px 16px',
              filter: 'opacity(0.8)',
              borderRadius: '8px'
            }}
          >
            <ActionButton>Anterior</ActionButton>
            <ActionButton>Limpar</ActionButton>
            <ActionButton>Próximo</ActionButton>
          </div>
          <CardsSection>
            {teste.map(item => (
              <Card key={item}></Card>
            ))}
          </CardsSection>
        </article>
      </MainContainer>
    </Wrapper>
  );
}
