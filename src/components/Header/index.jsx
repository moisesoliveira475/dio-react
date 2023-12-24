import Button from '../Button'
import { Container, Input, Menu, MenuRight, Row, SearchInputContainer, Wrapper } from './styles'
import logo from '../../assets/logo.png'
import { UserPicture } from '../Card/styles'
import { useNavigate } from 'react-router-dom'

const Header = ({ autenticado }) => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login')
  }

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="" />
          {autenticado ? (
            <>
              <SearchInputContainer>
                <Input placeholder='buscar...' />
              </SearchInputContainer>
              <Menu>Live code</Menu>
              <Menu>Global</Menu>
              <Button title={'sair'} onClick={() => handleClickSignIn()} />
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src='https://avatars.githubusercontent.com/u/45184516?v=4' />
          ) : (
            <>
              <MenuRight href='/'>Home</MenuRight>
              <Button title='entrar' />
              <Button title='cadastrar' />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Header;