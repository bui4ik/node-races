async function saveNewElement(res, model){
	try {
		await model.save();
		res.send(model)
	} catch (e) {
		res.status(404).send(e.message)
	}
}

module.exports = saveNewElement;
