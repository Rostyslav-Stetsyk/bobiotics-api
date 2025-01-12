import { Request, Response } from 'express';
import controllerWrapper from '../decorators/controllerWrapper.decorators';
import axios from 'axios';

const redirectToUchat = async (req: Request, res: Response) => {
	const result = await axios.post(
		'https://www.uchat.com.au/api/iwh/fa6754a433748125f242e6a242dfa40b',
		req.body
	);

	res.status(result.status).json(result.data);
};

export default { redirectToUchat: controllerWrapper(redirectToUchat) };
