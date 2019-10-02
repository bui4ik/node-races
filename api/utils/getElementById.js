async function getElementById(res, model , id) {
	try {
		const item = await model.findById(id);
		res.send(item)
	} catch (e) {
		res.status(404).send(e.message)
	}
}

module.exports = getElementById;
