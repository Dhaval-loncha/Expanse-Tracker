import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { dateFormat } from "../../utils/dateFormat";

const IncomeItem = ({
	id,
	title,
	amount,
	date,
	category,
	description,
	deleteItem,
	indicatorColor,
	type,
}) => {
	const categoryIcon = () => {
		switch (category) {
			case "salary":
				return <i className="fa-solid fa-money-bill"></i>;
			case "freelancing":
				return <i className="fa-solid fa-earth-americas"></i>;
			case "investments":
				return <i className="fa-solid fa-arrow-trend-up"></i>;
			case "stocks":
				return <i className="fa-solid fa-users-between-lines"></i>;
			case "bitcoin":
				return <i className="fa-brands fa-bitcoin"></i>;
			case "bank":
				return <i class="fa-solid fa-building-columns"></i>;
			case "youtube":
				return <i className="fa-brands fa-youtube"></i>;
			case "other":
				return <i className="fa-solid fa-piggy-bank"></i>;
			default:
				return <i className="fa-solid fa-circle-dot"></i>;
		}
	};

	const expenseCatIcon = () => {
		switch (category) {
			case "education":
				return <i className="fa-solid fa-book-open"></i>;
			case "groceries":
				return <i className="fa-solid fa-bowl-food"></i>;
			case "health":
				return <i className="fa-solid fa-briefcase-medical"></i>;
			case "subscriptions":
				return <i className="fa-solid fa-tv"></i>;
			case "takeaways":
				return <i className="fa-solid fa-utensils"></i>;
			case "clothing":
				return <i className="fa-solid fa-shirt"></i>;
			case "traveling":
				return <i className="fa-solid fa-earth-americas"></i>;
			case "other":
				return <i className="fa-solid fa-circle-dot"></i>;
			default:
				return <i className="fa-solid fa-circle-dot"></i>;
		}
	};

	return (
		<IncomeItemStyled indicator={indicatorColor}>
			<div className="icon">{type === "expense" ? expenseCatIcon() : categoryIcon()}</div>
			<div className="content">
				<h5>{title}</h5>
				<div className="inner-content">
					<div className="text">
						<p>
							{<i class="fa-solid fa-indian-rupee-sign"></i>} {amount}
						</p>
						<p>
							{<i className="fa-solid fa-calendar"></i>} {dateFormat(date)}
						</p>
						<p>
							{<i className="fa-solid fa-comment"></i>} {description}
						</p>
					</div>
					<div className="btn-con">
						<Button
							icon={<i className="fa-solid fa-trash"></i>}
							bPad={"1rem"}
							bRad={"50%"}
							bg={"var(--primary-color)"}
							color={"#fff"}
							onClick={() => deleteItem(id)}
							hColor={"var(--primary-color)"}
						/>
					</div>
				</div>
			</div>
		</IncomeItemStyled>
	);
};

const IncomeItemStyled = styled.div`
	background: #fcf6f9;
	border: 2px solid #ffffff;
	box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
	border-radius: 20px;
	padding: 1rem;
	margin-bottom: 1rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	width: 100%;
	color: #222260;

	.icon {
		width: 80px;
		height: 80px;
		border-radius: 20px;
		background: #f5f5f5;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid #ffffff;

		i {
			font-size: 2.6rem;
		}
	}
	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.2rem;

		h5 {
			font-size: 1.3rem;
			padding-left: 2rem;
			position: relative;

			&::before {
				content: "";
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				width: 0.8rem;
				height: 0.8rem;
				border-radius: 50%;
				background: ${(props) => props.indicator};
			}
		}

		.inner-content {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.text {
				display: flex;
				align-items: center;
				gap: 1.5rem;

				p {
					display: flex;
					align-items: center;
					gap: 0.5rem;
					color: var(--primary-color);
					opacity: 0.8;
				}
			}
		}
	}
`;

export default IncomeItem;
