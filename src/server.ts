import morgan from 'morgan';
import app from './app';
import swaggerUi from 'swagger-ui-express';
import 'dotenv/config';
import swaggerDocs from './config/swagger';
import { NextFunction, Request, Response } from 'express';

const PORT = process.env.PORT || 3000;

app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

if (process.env.NODE_ENV !== 'production') {
	app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
	console.log(`Swagger Docs available at http://localhost:${PORT}/api/docs 📄`);
}

app.use((req, res) => {
	res.status(404).json({ message: 'Not found' });
});

app.use(
	(
		{ status = 500, message = 'Server error' },
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		res.status(status).json({ message });
	}
);

app.listen(PORT);
