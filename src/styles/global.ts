import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import background from '../assets/images/background.svg';

export default createGlobalStyle`
	:root {
		--white: #fff;
		--gray-100: #999;
    --gray-500: #333;
    --blue: #7159c1;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	@media (max-width: 1080px) {
		html {
			font-size: 93.75%; // 15px
		}
	}

	@media (max-width: 753px) {
		html {
			font-size: 87.5%; // 14px
		}
	}


	body {
		background: #191920 url(${background}) no-repeat center top;
		-webkit-font-smoothing: antialiased;
	}

	body, input, select, textarea, button {
		font: 400 1rem "Roboto", sans-serif;
	}


	#root {
		max-width: 1020px;
		margin: 0 auto;
		padding: 0 1.25rem 3.12rem;
	}

	button {
		cursor: pointer;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`;
