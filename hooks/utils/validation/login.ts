import Joi from 'joi';
import { LoginForm } from '../form';

export const LoginSchema = Joi.object({
  [LoginForm.EMAIL]: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label('Email'),
  [LoginForm.PASSWORD]: Joi.string().required().label('Password'),
});
