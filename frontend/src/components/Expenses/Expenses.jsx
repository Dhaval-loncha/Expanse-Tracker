import styled from "styled-components";
import { InnerLayout } from "../../styles/layout";
import { useEffect } from "react";
import IncomeItem from "../IncomeItem/IncomeItem";
import ExpenseForm from "./ExpenseForm";
import { useGlobalContext } from "../../context/globalContext";

const Expenses = () => {
	const { addExpense, expenses, getExpense, deleteExpense, totalExpense } = useGlobalContext();

	useEffect(() => {
		getExpense();
	}, []);

	return (
		<IncomesStyled>
			<InnerLayout>
				<h1>Expenses</h1>
				<h2 className="total-income">
					Total Expenses :
					<span>
						<i class="fa-solid fa-indian-rupee-sign"></i> {totalExpense()}
					</span>
				</h2>
				<div className="income-content">
					<div className="form-container">
						<ExpenseForm />
					</div>
					<div className="incomes">
						{expenses.map((expense) => {
							const { _id, title, amount, date, category, description } = expense;

							return (
								<IncomeItem
									key={_id}
									id={_id}
									title={title}
									amount={amount}
									date={date}
									type="expense"
									category={category}
									description={description}
									indicatorColor="var(--color-accent)"
									deleteItem={deleteExpense}
								/>
							);
						})}
					</div>
				</div>
			</InnerLayout>
		</IncomesStyled>
	);
};

const IncomesStyled = styled.div`
	display: flex;
	overflow: auto;

	.total-income {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #fcf6f9;
		border: 2px solid #ffffff;
		box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
		border-radius: 20px;
		padding: 1rem;
		margin: 1rem 0;
		font-size: 2rem;
		gap: 0.5rem;
		span {
			font-size: 2.5rem;
			font-weight: 800;
			color: var(--color-accent);
		}
	}

	.income-content {
		display: flex;
		gap: 2rem;

		.incomes {
			flex: 1;
		}
	}
`;

export default Expenses;
