import Joi from 'joi';
import { ActivitesForm } from '../form';

export const ActivitesSchema = Joi.object({
  [ActivitesForm.TODO]: Joi.string().required().label('Todo'),
  [ActivitesForm.NOTE]: Joi.string().optional().allow('').label('Note'),
});
