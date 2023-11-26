import Joi from 'joi';
import { ProfileForm } from './form';

export const UpdateProfileSchema = Joi.object({
  [ProfileForm.FIRSTNAME]: Joi.string().required().label('First Name'),
  [ProfileForm.LASTNAME]: Joi.string().required().label('Last Name'),

  [ProfileForm.PASSWORD]: Joi.string().optional().allow('').label('Password'),
  [ProfileForm.CONFIRM_PASSWORD]: Joi.string()
    .valid(Joi.ref(ProfileForm.PASSWORD))
    .optional()
    .allow('')
    .messages({ 'any.only': '"Confirm password" must match Password' }),
});
