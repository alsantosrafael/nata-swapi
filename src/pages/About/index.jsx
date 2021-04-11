import { MainContainer } from '../../styles/global';
import Header from '../../components/Header';
import { Container, Portrait, Anchor } from './styles';
import linkedinIcon from '../../local_assets/linkedin.png';
import githubIcon from '../../local_assets/github.png';
const About = () => {
  return (
    <div>
      <MainContainer>
        <Header />
        <Container>
          <h2>Rafael Almeida</h2>
          <Portrait></Portrait>
          <Anchor href="https://www.linkedin.com/in/rafaalms/">
            <span>
              <img src={linkedinIcon} alt="linkedin" />
              Linkedin
            </span>
          </Anchor>
          <Anchor href="https://github.com/alsantosrafael/nata-swapi">
            <span>
              <img src={githubIcon} alt="github" />
              Projeto Github
            </span>
          </Anchor>
        </Container>
      </MainContainer>
    </div>
  );
};

export default About;
