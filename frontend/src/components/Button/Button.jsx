import { useState } from "react";
import styled from "styled-components";

const Button = ({ name, icon, onClick, bg, bPad, color, bRad, hColor }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<ButtonStyled
			style={{
				background: isHovered ? hColor : bg,
				padding: bPad,
				borderRadius: bRad,
				color: color,
				opacity: isHovered ? 1 : 0.8,
			}}
			onClick={onClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{icon}
			{name}
		</ButtonStyled>
	);
};

const ButtonStyled = styled.button`
	outline: none;
	border: 2px solid #fff;
	font-family: inherit;
	font-size: inherit;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;
	transition: all 0.1s ease-in-out;
`;

export default Button;
