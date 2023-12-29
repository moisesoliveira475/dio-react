import Header from "../../components/Header";
import { CriarText } from "../login/styles";
import { Container, Column, Row, Wrapper, Title, TitleLogin, SubTitleLogin, EsqueciText } from './styles'

const Cadastro = () => {

  return (
    <>
      <Header/>
      <Container>
        <Column>
          <Title>
          A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
          <SubTitleLogin>SubTitleLogin</SubTitleLogin>
          <form onSubmit={()=> null}>

          </form>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>TitleLogin</TitleLogin>
            <SubTitleLogin>SubTitleLogin</SubTitleLogin>
            <Row>
              <EsqueciText>EsqueciText</EsqueciText>
              <CriarText>CriarText</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}

export default Cadastro;