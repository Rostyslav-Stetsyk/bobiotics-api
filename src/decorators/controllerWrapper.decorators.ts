import { NextFunction, Request, RequestHandler, Response } from 'express';

const controllerWrapper = (controller: RequestHandler) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			await controller(req, res, next);
		} catch (error) {
			next(error);
		}
	};
};
export default controllerWrapper;
