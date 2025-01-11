import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions: swaggerJsDoc.Options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'API Documentation',
			version: '1.0.0',
			description: 'Documentation for the Node.js API',
		},
		servers: [
			{
				description: 'Local server',
				url: 'http://localhost:3000/api',
			},
		],
	},
	apis: ['./src/routes/*.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
export default swaggerDocs;
