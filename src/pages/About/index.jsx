import { MainContainer } from '../../styles/global';
import Header from '../../components/Header';
import { Container, Portrait } from './styles';

const About = () => {
  return (
    <div>
      <MainContainer>
        <Header />
        <Container>
          <Portrait></Portrait>
        </Container>
      </MainContainer>
    </div>
  );
};

export default About;
