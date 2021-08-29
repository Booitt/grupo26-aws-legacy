const { handleCors, handleRequest, res } = require("./utils")

exports.handler = async (event) => {
	const { routeKey, body, pathParameters, queryStringParameters, headers } = event

	if (routeKey.startsWith("OPTIONS")) {
		return handleCors(headers)
	}

	try {
		return await handleRequest(routeKey, body, pathParameters, queryStringParameters)
	} catch (error) {
		console.log(error)
		return res(500, { message: "Something went wrong." })
	}
}
