/* eslint-disable no-useless-escape */
import { useContext } from 'react';
import Header from '../../components/Header';
import { Wrapper, CardsSection, Card, ActionButton } from './styles';
import { MainContainer } from '../../styles/global';
import { GlobalContext } from '../../GlobalContext';
import calculateStops from '../../services/calculateStops';

export default function Home() {
  //   const [loading, setLoading] = useState(false);
  //   const teste = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { setBusca, starShips, setStarships, busca } = useContext(
    GlobalContext
  );
  return (
    <Wrapper>
      <Header />
      <MainContainer>
        {starShips && (
          <article>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                maxWidth: '600px',
                marginLeft: '3rem',
                marginBottom: '8px',
                //   backgroundColor: '#182c3e',
                padding: '8px 16px',
                filter: 'opacity(0.8)',
                borderRadius: '8px'
              }}
            >
              <ActionButton>Anterior</ActionButton>
              <ActionButton
                onClick={() => {
                  setBusca(null);
                  setStarships(undefined);
                }}
              >
                Limpar
              </ActionButton>
              <ActionButton>Próximo</ActionButton>
            </div>
            <CardsSection>
              {starShips.map(item => (
                <Card key={item}>
                  <h3>Name: {item.name}</h3>
                  <p>
                    Stops:
                    {calculateStops(
                      Number(item.mglt).replace(/^[,|\.]$/gi, ''),
                      item.consumables,
                      Number(busca.replace(/^[,|\.]$/gi, ''))
                    )}
                  </p>
                </Card>
              ))}
            </CardsSection>
          </article>
        )}
      </MainContainer>
    </Wrapper>
  );
}
