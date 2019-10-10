const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

function swagger (app){
	const swaggerOptions = {
		swaggerDefinition: {
			info: {
				title: "Express Races",
				description: "Users races API information",
				contact: {
					name: "Max Buinevich"
				},
				servers: ["http://localhost:3000"]
			}
		},
		apis:["./api/**/*.router.js"]
	};

	const swaggerDocs = swaggerJsDoc(swaggerOptions);
	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}

module.exports = swagger;
