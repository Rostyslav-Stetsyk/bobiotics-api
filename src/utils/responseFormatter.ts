export function formatResponse<T>(data: T) {
	return {
		success: true,
		data,
	};
}
