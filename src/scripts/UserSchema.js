import * as yup from "yup";
const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório")
    .matches(
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
      "Somente letras e acentos são permitidos"
    ),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha Obrigatória")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Mínimo de 8 caracteres, precisa conter letras maiúsculas e minúsculas,números e símbolos "
    ),
  confirm_password: yup
    .string()
    .required("Necessário confirmar a senha")
    .oneOf([yup.ref("password")], "As senhas não são iguais"),
  contact: yup
    .string()
    .required("Contato obrigatório")
    .matches(
      /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
      "Número inválido"
    ),
  bio: yup.string().required("Bio obrigatória"),
  course_module: yup.string().required("Seleciona uma opção!"),
});

export default registerSchema;
