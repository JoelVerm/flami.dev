import { page as loginPage } from '../components/index-login.js'
import { css } from '../components/main-css.js'

flami(
	() => html`
		<style>
            ${css}
		</style>
		${loginPage()}
	`
)
