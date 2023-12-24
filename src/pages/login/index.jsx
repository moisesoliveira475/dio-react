import Button from "../../components/Button";
import Header from "../../components/Header/index";
import Input from "../../components/Input/index";
import { useNavigate } from "react-router-dom";
import { Column, Container, CriarText, EsqueciText, SubtitleLogin, Title, TitleLogin, Wrapper, Row } from "./styles";
import { MdEmail, MdLock } from 'react-icons/md'
import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
	email: yup.string().email().required('Campo obrigatório'),
	password: yup.string().min(3, 'no minimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {

	const { control, handleSubmit, formState: { errors, isValid }} = useForm({
		resolver: yupResolver(schema),
		mode: 'onChange'
	});

	const onSubmit = data => console.log(data)

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
						<form onSubmit={handleSubmit(onSubmit)}>
							<Input name="emai" errorMessage={errors?.email?.message} control={control} placeholder='E-mail' leftIcon={<MdEmail />}/>
							<Input name="password" errorMessage={errors?.password?.message} control={control} type='password' placeholder='Password' leftIcon={<MdLock />}/>
							<Button title={"Entrar"} variant="secondary" onClick={handleClickSignIn()} type='submit'/>
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