import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { MdEmail, MdLock } from 'react-icons/md';
import Button from "../../components/Button";
import Header from "../../components/Header/index";
import Input from "../../components/Input/index";
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import { useAuth } from '../../hooks/useAuth';
import { schema } from '../../schema';
import { IFormData } from "./types";

const Login = () => {
	
	const { handleLogin } = useAuth();
	
	const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
		resolver: yupResolver(schema),
		mode: 'onChange'
	});

	const onSubmit = async (formData: IFormData) => {
		handleLogin(formData)
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
							<Input name="email" errorMessage={errors?.email?.message} control={control} placeholder='E-mail' leftIcon={<MdEmail />} />
							{errors.email && <span>E-mail é obrigatório</span>}
							<Input name="password" errorMessage={errors?.password?.message} control={control} type='password' placeholder='Password' leftIcon={<MdLock />} />
							{errors.password && <span>Senha é obrigatório</span>}
							<Button title={"Entrar"} variant="secondary" type='submit' />
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