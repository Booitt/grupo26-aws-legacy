const { handleCors, handleRequest, res } = require("./utils")

exports.handler = async (event) => {
	const { routeKey, pathParameters, body, headers } = event

	if (routeKey.startsWith("OPTIONS")) {
		return handleCors(headers)
	}

	try {
		return await handleRequest(routeKey, body, pathParameters)
	} catch (error) {
		return res(400, { message: error })
	}
}
