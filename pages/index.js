import { page as indexPage } from '../components/index-home.js'
import { page as appsPage } from '../components/index-apps.js'
import { page as loginPage } from '../components/index-login.js'
import { css } from '../components/main-css.js'
import { navbar, navItem, activePage, activate } from '../components/navbar.js'

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
                display: grid;
                grid-template-columns: repeat(100,  100vw);
                width: 100vw;
                transition: left 0.5s;
            }
            .main-container > div {
                position: relative;
                height: 100vh;
                width: 1000vw;
                padding-bottom: 80px;
                padding-left: 50px;
                padding-right: calc(50px + 900vw);
                overflow-y: auto;
            }
            .main-container > div > .center {
                left: 50vw;
            }
        `}
		</style>
		<main class="main-container">
			<section class="home-container">${indexPage(activate)}</section>
			<section class="apps-container">${appsPage()}</section>
			<section class="login-container">${loginPage()}</section>
		</main>
		${navbar(
			navItem('Home', 'home-outline'),
			navItem('Apps', 'apps-outline'),
			navItem('Login', 'log-in-outline')
		)}
	`
)
