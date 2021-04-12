/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import { useContext, useCallBack, useEffect } from 'react';
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
// import api from '../../services/api';
export default function Home() {
  //   const [loading, setLoading] = useState(false);
  const {
    setBusca,
    starShips,
    setStarships,
    busca,
    setShowModal,
    currentPage,
    setCurrentPage
  } = useContext(GlobalContext);

  //   const handleNext = useCallBack(async () => {
  //     if (starShips?.totalPages > currentPage) {
  //       setCurrentPage(currentPage + 1);
  //       try {
  //         const { data } = await api.get(`/starships?page=${currentPage}`);
  //         setStarships(data.results);
  //       } catch (err) {
  //         alert('Problem with api.');
  //         setBusca(null);
  //         setStarships(undefined);
  //       }
  //     }
  //   }, [starShips, currentPage]);

  //   const handlePrevious = useCallBack(async () => {
  //     // if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //     try {
  //       const { data } = await api.get(`/starships?page=${currentPage}`);
  //       setStarships(data.results);
  //     } catch (err) {
  //       alert('Problem with api.');
  //       setBusca(null);
  //       setStarships(undefined);
  //     }
  //     // }
  //   }, [starShips, currentPage]);

  //   useEffect(() => {
  //     handleNext();
  //   }, [handleNext]);

  //   useEffect(() => {
  //     handlePrevious();
  //   }, [handlePrevious]);

  return (
    <>
      <Modal />

      <Wrapper>
        <Header />
        <MainContainer>
          {starShips && (
            <Article>
              <Organizer>
                <ActionButton
                  disabled={starShips.currentPage === 1}
                  //   onClick={() => handlePrevious}
                >
                  Anterior
                </ActionButton>
                <ActionButton
                  onClick={() => {
                    setBusca(null);
                    setStarships(undefined);
                  }}
                >
                  Limpar
                </ActionButton>
                <ActionButton
                  disabled={starShips.totalPages === currentPage}
                  //   onClick={() => handleNext}
                >
                  Próximo
                </ActionButton>
              </Organizer>
              <CardsSection>
                {starShips.map(item => (
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
