/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import { useContext, useCallback, useEffect } from 'react';
import Header from '../../components/Header';
import {
  Wrapper,
  CardsSection,
  Card,
  ActionButton,
  Organizer,
  Article
} from './styles';
import { MainContainer } from '../../styles/global';
import { GlobalContext } from '../../GlobalContext';
import calculateStops from '../../services/calculateStops';
import Modal from '../Modal';
import api from '../../services/api';
export default function Home() {
  const { setBusca, starShips, setStarships, busca, setShowModal } = useContext(
    GlobalContext
  );

  const handleNext = useCallback(async () => {
    if (starShips?.next) {
      try {
        const { data } = await api.get(`${starShips.next}`);
        setStarships(data);
      } catch (err) {
        alert('Problem with api.');
        setBusca(null);
        setStarships(undefined);
      }
    }
  }, [setBusca, setStarships, starShips?.next]);

  const handlePrevious = useCallback(async () => {
    if (starShips?.previous) {
      try {
        const { data } = await api.get(`${starShips.previous}`);

        setStarships(data);
      } catch (err) {
        alert('Problem with api.');
        setBusca(null);
        setStarships(undefined);
      }
    }
    // }
  }, [setBusca, setStarships, starShips?.previous]);

  return (
    <>
      <Modal />

      <Wrapper>
        <Header />
        <MainContainer>
          {starShips && (
            <Article>
              <Organizer>
                <ActionButton onClick={handlePrevious}>Anterior</ActionButton>
                <ActionButton
                  onClick={() => {
                    setBusca(null);
                    setStarships(undefined);
                  }}
                >
                  Limpar
                </ActionButton>
                <ActionButton onClick={handleNext}>Próximo</ActionButton>
              </Organizer>
              <CardsSection>
                {starShips.results.map(item => (
                  <Card key={item.name} onClick={() => setShowModal(item)}>
                    <h3>Name: {item.name}</h3>
                    <p className="stops">
                      Stops: {''}
                      {calculateStops(
                        Number(item.MGLT),
                        item.consumables,
                        Number(busca)
                      )}
                    </p>
                    <p>Cons: {item?.consumables}</p>
                    <p>MGLT: {item?.MGLT}</p>
                  </Card>
                ))}
              </CardsSection>
            </Article>
          )}
        </MainContainer>
      </Wrapper>
    </>
  );
}
