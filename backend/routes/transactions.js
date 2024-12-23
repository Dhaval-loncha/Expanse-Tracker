const { addExpanse, getExpanse, deleteExpanse } = require("../controller/expanse");
const { addIncome, getIncome, deleteIncome } = require("../controller/income");

const router = require("express").Router();

router
	.post("/add-income", addIncome)
	.get("/get-income", getIncome)
	.delete("/delete-income/:id", deleteIncome)
	.post("/add-expense", addExpanse)
	.get("/get-expense", getExpanse)
	.delete("/delete-expense/:id", deleteExpanse);
module.exports = router;
