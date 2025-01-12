import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';
import httpError from '../utils/httpError';

const validateBody = (schema: Schema) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		if (!req.body) {
			return next(httpError(400, 'Body is empty'));
		}
		const isValidate = schema.validate(req.body);
		if (isValidate.error) {
			return next(httpError(400, isValidate.error.message));
		}
		next();
	};
};
export default validateBody;
