import Button from '../Button'
import { Container, Input, Menu, MenuRight, Row, SearchInputContainer, Wrapper } from './styles'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="" />
          <SearchInputContainer>
            <Input placeholder='buscar...'/>
          </SearchInputContainer>
          <Menu>Live code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight href='#'>Home</MenuRight>
          <Button title='entrar'/>
          <Button title='cadastrar'/>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Header