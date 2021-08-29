const AWS = require("aws-sdk")
const dynamo = new AWS.DynamoDB.DocumentClient()
const { v4: uuid } = require("uuid")

const handleRequest = async (
	routeKey,
	body,
	pathParameters,
	queryStringParameters
) => {
	if (routeKey === "GET /leads/{id}") {
		const { id } = pathParameters
		const { Item: lead } = await dynamo
			.get({
				TableName: "leads",
				Key: {
					id,
				},
			})
			.promise()
		if (!Object.keys(lead).length)
			return res(404, { message: "Lead não encontrada." })
		return res(200, lead)
	}

	if (routeKey === "PUT /leads/{id}") {
		const { id } = pathParameters
		if (!body) return res(400, { message: "Parâmetros inválidos." })
		const { nome, email, telefone } = JSON.parse(body)

		const { Item: lead } = await dynamo
			.get({
				TableName: "leads",
				Key: {
					id,
				},
			})
			.promise()
		if (!lead) return res(404, { message: "Lead não encontrada." })
		await dynamo
			.update({
				TableName: "leads",
				Key: {
					id,
				},
				AttributeUpdates: {
					nome: { Value: nome || lead.nome },
					email: { Value: email || lead.email },
					telefone: { Value: telefone || lead.telefone },
				},
			})
			.promise()
		return res(200, { message: "Lead atualizada!" })
	}

	if (routeKey === "DELETE /leads/{id}") {
		const { id } = pathParameters
		if (!id) return res(400, { message: "Parâmetros inválidos." })
		await dynamo
			.delete({
				TableName: "leads",
				Key: {
					id,
				},
			})
			.promise()
		return res(200, { message: "Lead deletada!" })
	}

	if (routeKey === "GET /leads") {
		const leads = await dynamo.scan({ TableName: "leads" }).promise()
		if (!leads) return res(500, { message: "Erro no servidor." })
		return res(200, leads)
	}

	if (routeKey === "POST /leads") {
		const { nome, email, telefone = "" } = JSON.parse(body)
		if (!nome || !email) return res(400, { message: "Parâmetros inválidos." })
		// Check if email is already registered
		const {
			Items: [lead],
		} = await dynamo
			.scan({
				TableName: "leads",
				FilterExpression: "email = :email",
				ExpressionAttributeValues: {
					":email": email,
				},
			})
			.promise()
		if (lead) return res(409, { message: "E-mail já cadastrado." })
		await dynamo
			.put({
				TableName: "leads",
				Item: {
					id: uuid(),
					nome,
					email,
					telefone,
					prospectSince: Date.now(),
					clientSince: false,
				},
			})
			.promise()
		return res(200, { message: "Lead criada!" })
	}

	if (routeKey === "PUT /convert") {
		const { email } = queryStringParameters
		if (!email) return res(400, { message: "Parâmetros inválidos." })
		const {
			Items: [lead],
		} = await dynamo
			.scan({
				TableName: "leads",
				FilterExpression: "email = :email",
				ExpressionAttributeValues: {
					":email": email,
				},
			})
			.promise()
		if (!lead) return res(404, { message: "Lead não encontrada." })
		if (lead.clientSince)
			return res(409, { message: "Lead já atualizada anteriormente." })
		await dynamo
			.update({
				TableName: "leads",
				Key: {
					id: lead.id,
				},
				AttributeUpdates: {
					clientSince: {
						Value: Date.now(),
					},
				},
			})
			.promise()
		return res(200, { message: "Lead atualizada!" })
	}

	return res(404, { error: "Rota não encontrada." })
}

const handleCors = (headers) => {
	const { origin, Origin } = headers
	return {
		statusCode: 200,
		headers: {
			"Access-Control-Allow-Headers": "Content-Type",
			"Access-Control-Allow-Origin": origin || Origin,
		},
		body: JSON.stringify({ message: "Success" }),
	}
}

const res = (
	statusCode = 200,
	body = {},
	headers = {
		"Content-Type": "application/json",
	}
) => {
	return { statusCode, body: JSON.stringify(body), headers }
}

module.exports = {
	handleCors,
	handleRequest,
	res,
}
