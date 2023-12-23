import Button from "../../components/Button"
import Header from "../../components/Header/index"
import Input from "../../components/Input/index"
import { useNavigate } from "react-router-dom"
import { Column, Container, CriarText, EsqueciText, SubtitleLogin, Title, TitleLogin, Wrapper, Row } from "./styles"
import { MdEmail, MdLock } from 'react-icons/md'


const Login = () => {

	const navigate = useNavigate();

	const handleClickSignIn = () => {
		navigate('/feed')
	}

	return (
		<>
			<Header />
			<Container>
				<Column>
					<Title>
						A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas
					</Title>
				</Column>
				<Column>
					<Wrapper>
						<TitleLogin>Faça seu cadastro</TitleLogin>
						<SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
						<form>
							<Input placeholder='E-mail' leftIcon={<MdEmail />}/>
							<Input type='password' placeholder='Password' leftIcon={<MdLock />}/>
							<Button title={"Entrar"} variant="secondary" onClick={handleClickSignIn()} type='button'/>
						</form>
						<Row>
							<EsqueciText>Esqueci minha senha</EsqueciText>
							<CriarText>Criar conta</CriarText>
						</Row>
					</Wrapper>
				</Column>
			</Container>
		</>
	)
}

export default Login;