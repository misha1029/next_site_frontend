import * as yup from "yup";

export const LoginFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Почта обязательная'),
    password: yup.string().min(6, 'Пароль должен быть не мение 6 символов').required('Пароль обязательный'),
  }).required();

  export const RegisterFormSchema = yup
  .object()
  .shape({
    fullName: yup.string().required('Имя и фамилия обязательны'),
  })
  .concat(LoginFormSchema);
