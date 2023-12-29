import * as yup from "yup";

export const schema = yup.object({
	email: yup.string().email().required('Campo obrigatório'),
	password: yup.string().min(3, 'no minimo 3 caracteres').required('Campo obrigatório'),
}).required();