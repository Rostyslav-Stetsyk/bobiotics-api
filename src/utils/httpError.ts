class HttpError extends Error {
	status: number;

	constructor(status: number, message: string) {
		super(message);
		this.status = status;
	}
}

const httpError = (status: number, msg: string) => {
	const err = new HttpError(status, msg);
	return err;
};

export default httpError;
