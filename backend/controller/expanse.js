const expanseSchema = require("../models/expanseModel");

exports.addExpanse = async (req, res) => {
	const { title, amount, category, description, date } = req.body;

	const income = expanseSchema({
		title,
		amount,
		category,
		description,
		date,
	});

	try {
		// validations

		if (!title || !category || !description || !date) {
			return res.status(400).json({ message: "All fields are required!" });
		}

		if (amount <= 0 || !amount === "number") {
			return res.status(400).json({ message: "Amount must be positive number!" });
		}

		await income.save();
		res.status(200).json({ message: "Expanse add successfully!" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}

	console.log(income);
};

exports.getExpanse = async (req, res) => {
	try {
		const incomes = await expanseSchema.find().sort({ createdAt: -1 });
		res.status(200).json(incomes);
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
};

exports.deleteExpanse = async (req, res) => {
	const { id } = req.params;
	expanseSchema
		.findByIdAndDelete(id)
		.then((income) => {
			res.status(200).json({ message: "Expanse deleted successfully!" });
		})
		.catch((error) => {
			res.status(500).json({ message: "Server Error" });
		});
};
