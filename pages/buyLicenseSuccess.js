import { css } from '../components/main-css.js'
import { page as cursor } from '../components/cursor.js'

flami(
    () => html`
		<style>
			${css}
		</style>
        ${cursor()}
		<main class="center vertical">
			<h2>Payment succeeded</h2>
			<h4>Your license will be activated soon</h4>
			<a href="portal">Return to portal</a>
		</div>
	`
)
