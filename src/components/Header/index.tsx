import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useAuth } from '../../hooks/useAuth'
import Button from '../Button'
import { UserPicture } from '../Card/styles'
import { Container, Input, Menu, MenuRight, Row, SearchInputContainer, Wrapper } from './styles'

const Header = () => {

  const navigate = useNavigate()

  const { handleLogout, Loggedin } = useAuth()

  const handleClickSignIn = () => {
    navigate('/login')
  }

  return (
    <Wrapper>
      <Container>
        <Row>
            <img src={logo} alt="" />
          {Loggedin ? (
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
          {Loggedin ? (
            <UserPicture src='https://avatars.githubusercontent.com/u/45184516?v=4' />
          ) : (
            <>
              <MenuRight href='/'>Home</MenuRight>
              <Button title='entrar' />
              <Button title='sair' onClick={handleLogout}/>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Header;