/* eslint-disable no-useless-escape */
import { useContext } from 'react';
import Header from '../../components/Header';
import { Wrapper, CardsSection, Card, ActionButton } from './styles';
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
    setShowModal
    // currentPage,
    // setCurrentPage
  } = useContext(GlobalContext);

  //   const handleNext = useCallBack(async () => {
  //     setCurrentPage(setCurrentPage + 1);
  //     try {
  //       const { data } = await api.get(`/starships?page=${currentPage}`);
  //       setStarships(data.results);
  //     } catch (err) {
  //       alert('Problem with api.');
  //       setBusca(null);
  //       setStarships(undefined);
  //     }
  //   }, []);

  //   const handlePrevious = useCallBack(async () => {
  //     if (currentPage > 1) {
  //       setCurrentPage(setCurrentPage - 1);
  //       try {
  //         const { data } = await api.get(`/starships?page=${currentPage}`);
  //         setStarships(data.results);
  //       } catch (err) {
  //         alert('Problem with api.');
  //         setBusca(null);
  //         setStarships(undefined);
  //       }
  //     }
  //   }, []);

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
            <article>
              <div
                style={{
                  display: 'flex',
                  width: '615px',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  margin: '0 auto',
                  marginLeft: '3rem',
                  marginBottom: '8px',
                  backgroundColor: '#182c3e',
                  padding: '8px 16px',
                  filter: 'opacity(0.8)',
                  borderRadius: '8px'
                }}
              >
                <ActionButton /*{ onClick={() => handlePrevious} }*/>
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
                <ActionButton /*{ onClick={() => handleNext} }*/>
                  Próximo
                </ActionButton>
              </div>
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
            </article>
          )}
        </MainContainer>
      </Wrapper>
    </>
  );
}
