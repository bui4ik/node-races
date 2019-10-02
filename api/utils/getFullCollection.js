async function getFullCollection(res, model) {
	try {
		res.send( await model.find({}))
	} catch (e) {
		res.status(404).send(e.message())
	}
}

module.exports = getFullCollection;
