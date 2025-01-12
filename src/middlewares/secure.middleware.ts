import { NextFunction, Request, Response } from 'express';
import 'dotenv/config';

const secureMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (req.query.key !== process.env.API_KEY || !req.query.key) {
		res.status(401).json({ message: 'Unauthorized' });
		return;
	}
	next();
};

export default secureMiddleware;
