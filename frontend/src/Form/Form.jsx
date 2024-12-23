import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../context/globalContext";
import Button from "../components/Button/Button";

const Form = () => {
	const { addIncome, getIncome, error, setError } = useGlobalContext();

	const [inputState, setInputState] = useState({
		title: "",
		amount: "",
		category: "",
		description: "",
		date: "",
	});

	const { title, amount, category, description, date } = inputState;

	const handleInput = (name) => (e) => {
		setInputState({ ...inputState, [name]: e.target.value });
		setError('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addIncome(inputState);
		setInputState({ title: "", amount: "", category: "", description: "", date: "" });
	};

	return (
		<FormStyled onSubmit={handleSubmit} autoComplete="off">
			{error && <p className="error">{error}</p>}
			<div className="input-control">
				<input
					type="text"
					value={title}
					name={"title"}
					placeholder="Salary Title"
					onChange={handleInput("title")}
				/>
			</div>
			<div className="input-control">
				<input
					type="text"
					value={amount}
					name={"amount"}
					placeholder="Salary Amount"
					onChange={handleInput("amount")}
				/>
			</div>
			<div className="input-control">
				<div className="date-picker-wrapper">
					<DatePicker
						id="date"
						placeholderText="Enter a Date"
						selected={date}
						dateFormat={"dd/MM/yyyy"}
						onChange={(date) => {
							setInputState({ ...inputState, date: date });
						}}
					/>
				</div>
			</div>
			<div className="input-control selects">
				<select
					name="category"
					id="category"
					value={category}
					required
					onChange={handleInput("category")}
				>
					<option value="" disabled>
						Select Option
					</option>
					<option value="salary">Salary</option>
					<option value="freelancing">Freelancing</option>
					<option value="investments">Investments</option>
					<option value="stocks">Stocks</option>
					<option value="bitcoin">Bitcoin</option>
					<option value="bank">Bank</option>
					<option value="youtube">Youtube</option>
					<option value="other">Other</option>
				</select>
			</div>
			<div className="input-control">
				<textarea
					name="description"
					id="description"
					cols="30"
					rows="4"
					value={description}
					onChange={handleInput("description")}
					placeholder="Add A Reference"
				></textarea>
			</div>
			<div className="submit-btn">
				<Button
					name={"Add Income"}
					icon={<i className="fa-solid fa-plus"></i>}
					bPad={".8rem 1.6rem"}
					bRad={"30px"}
					bg={"var(--color-green)"}
					color={"#fff"}
					hColor={"var(--color-green)"}
				/>
			</div>
		</FormStyled>
	);
};

const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	input,
	textarea,
	select {
		font-family: inherit;
		font-size: inherit;
		outline: none;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		border: 2px solid #fff;
		background: transparent;
		resize: none;
		box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
		color: rgba(34, 34, 96, 0.9);
		&::placeholder {
			color: rgba(34, 34, 96, 0.4);
		}
	}
	.input-control {
		input {
			width: 100%;
		}

		.react-datepicker-wrapper {
			width: 100%;
		}

		.selects {
			display: flex;
			justify-content: flex-end;
			select {
				color: rgba(34, 34, 96, 0.4);
				&:focus,
				&:active {
					color: rgba(34, 34, 96, 1);
				}
			}
		}
	}
`;

export default Form;
