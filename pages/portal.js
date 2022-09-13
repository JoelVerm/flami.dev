import { page as buyPage } from '../components/portal-buy-test.js'
import { css } from '../components/main-css.js'
import { navbar, navItem, activePage } from '../components/navbar.js'

flami(
	() => html`
		<style>
			${css}
		</style>
		<style>
			${`
            .main-container {
                position: relative;
                top: 0; left: calc(${activePage}*-100vw);
                display: flex;
                transition: left 0.5s;
            }
            .main-container > div {
                position: relative;
                height: 100vh;
                width: 100vw;
                flex-shrink: 0;
                padding-bottom: 80px;
                padding-left: 50px;
                padding-right: 50px;
                overflow-y: auto;
            }
        `}
		</style>
		<div class="main-container">
			<div class="home-container">${buyPage()}</div>
		</div>
		${navbar(navItem('Buy', 'wallet-outline'))}
	`
)
