import { Request, Response } from 'express';
import { formatResponse } from '../utils/responseFormatter';

export function getTestItem(req: Request, res: Response) {
	const formattedResponse = formatResponse({
		id: '1',
		name: 'test',
	});
	res.json(formattedResponse);
}
