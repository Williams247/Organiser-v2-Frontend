import Joi from 'joi';
import { RegisterForm } from '../form';

export const SigninSchema = Joi.object({
  [RegisterForm.FIRSTNAME]: Joi.string().required().label('First Name'),
  [RegisterForm.LASTNAME]: Joi.string().required().label('Last Name'),
  [RegisterForm.EMAIL]: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label('Email'),
  [RegisterForm.PASSWORD]: Joi.string().required().label('Password'),
  [RegisterForm.CONFIRM_PASSWORD]: Joi.string()
    .valid(Joi.ref(RegisterForm.PASSWORD))
    .required()
    .messages({ 'any.only': '"Confirm password" must match Password' }),
});
