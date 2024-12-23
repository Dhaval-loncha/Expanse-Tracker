import React, { useContext, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
	const [incomes, setIncomes] = useState([]);
	const [expenses, setExpenses] = useState([]);
	const [error, setError] = useState(null);

	// calculate income
	const addIncome = async (income) => {
		try {
			const response = await axios.post(`${BASE_URL}add-income`, income);
		} catch (error) {
			setError(error.response.data.message);
		}
		getIncome();
	};

	const getIncome = async () => {
		try {
			const response = await axios.get(`${BASE_URL}get-income`);
			setIncomes(response.data);
		} catch (error) {
			setError(error.response.data.message);
		}
	};

	const deleteIncome = async (id) => {
		try {
			await axios.delete(`${BASE_URL}delete-income/${id}`);
		} catch (error) {
			setError(error.response.data.message);
		}
		getIncome();
	};

	const totalIncome = () => {
		let totalIncome = 0;
		incomes.forEach((income) => {
			totalIncome += income.amount;
		});

		return totalIncome;
	};

	// calculate expense
	const addExpense = async (expense) => {
		try {
			const response = await axios.post(`${BASE_URL}add-expense`, expense);
		} catch (error) {
			setError(error.response.data.message);
		}
		getExpense();
	};

	const getExpense = async () => {
		try {
			const response = await axios.get(`${BASE_URL}get-expense`);
			setExpenses(response.data);
		} catch (error) {
			setError(error.response.data.message);
		}
	};

	const deleteExpense = async (id) => {
		try {
			await axios.delete(`${BASE_URL}delete-expense/${id}`);
		} catch (error) {
			setError(error.response.data.message);
		}
		getExpense();
	};

	const totalExpense = () => {
		let totalExpense = 0;
		expenses.forEach((expense) => {
			totalExpense += expense.amount;
		});

		return totalExpense;
	};

	const transactionHistory = () => {
		const history = [...incomes, ...expenses];
		history.sort((a, b) => {
			return new Date(b.createdAt) - new Date(a.createdAt);
		});

		return history.slice(0, 3);
	};

	return (
		<GlobalContext.Provider
			value={{
				addIncome,
				getIncome,
				incomes,
				deleteIncome,
				totalIncome,
				addExpense,
				getExpense,
				expenses,
				deleteExpense,
				totalExpense,
				transactionHistory,
				error,
				setError
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(GlobalContext);
};
