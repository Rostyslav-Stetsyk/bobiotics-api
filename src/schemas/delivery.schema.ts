import Joi from 'joi';

const schema = Joi.object({
	parcel: Joi.object({
		telephone: Joi.string()
			.pattern(/^\+?[1-9]\d{1,14}$/)
			.required(),
		status: Joi.object({
			message: Joi.string()
				.valid('Driver en route', 'Delivered', 'Awaiting customer pickup')
				.required(),
		})
			.unknown(true)
			.required(),
	})
		.unknown(true)
		.required(),
})
	.unknown(true)
	.required();
export default schema;
