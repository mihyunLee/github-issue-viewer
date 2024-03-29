import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

	*{
		box-sizing: border-box;
	}
	:root{
		--black: #1F2125;
		--white: #fff;
		--gray700: #23272A;
		--gray500: #3D3F46;
		--gray300: #989AA1;
		--blue: #3366FF;
		--purple: #D4C5F9;
		--warning: #F15846;
		font-size: 16px;
	
	}
	body{
		font-family: 'Pretendard', sans-serif;
		background-color: var(--black);
		color: var(--white);
		margin: 0;
	}
	a{
		text-decoration: none;
		color: inherit;
	}
	button {
		border: 0;
		padding: 0;
		background: transparent;
		font-family: inherit;
		color: inherit;
		cursor: pointer;
	}
	ul,li{
		list-style: none;
		padding: 0;
	}
	img{
		width: 100%;
		vertical-align: middle;
	}
	svg{
		vertical-align: middle;
	}
	input{
		background: unset;
		border: unset;	
		font: inherit;
	}
	textarea {
		border: none;
		overflow: auto;
		outline: none;
		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		box-shadow: none;
		resize: none;
		font: inherit;
	}
	.a11y {
		clip: rect(1px, 1px, 1px, 1px);
		clip-path: inset(50%);
		width: 1px;
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
	}
`;

export default GlobalStyle;
