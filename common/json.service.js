const Joi = require('joi');
const fs = require("fs");

class JsonService {
	constructor(){
		this.users = JSON.parse(fs.readFileSync('./users.json', 'utf8'));
	}

	getAllUsers(res){
		res.send(this.users)
	}

	createNewUser(req, res){
		const { error } = validate(req.body);
		if (error) {
			res.status(400).send(error.details[0].message);
			return;
		}
		const id = Math.floor(Math.random() * 100000);
		const user = {
			id: id,
			name: req.body.name,
			age: req.body.age,
		};
		this.users.push(user);
		this.updateJSON(this.users, res)
	}

	editUser(req, res){
		const { error } = validate(req.body);
		if (error) {
			res.status(400).send(error.details[0].message);
			return;
		}
		this.users.map(e => {
			if (e.id === req.body.id) {
				e.name = req.body.name;
				e.age = req.body.age;
			}
		});
		this.updateJSON(this.users, res)
	}

	deleteUser(req, res){
		if(!req.body.id) res.status(404).send('Id is required');
		this.users = this.users.filter(e => e.id !== req.body.id);
		this.updateJSON(this.users, res)
	}

	updateJSON (users, res){
		fs.writeFile("users.json", JSON.stringify(users), err => {
			if (err) return res.status(404).send(err);
			res.send(users);
		})
	}
}

module.exports = JsonService;

function validate(body) {
	const schema = {
		name: Joi.string().min(3).required(),
		age: Joi.number().required()
	};

	return  Joi.validate(body, schema);
}
