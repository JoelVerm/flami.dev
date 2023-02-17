import { css } from '../components/main-css.js'
import { page as cursor } from '../components/cursor.js'

flami(
    () => html`
		<style>
			${css}
		</style>
        ${cursor()}
		<main class="center vertical">
			<h2>Payment failed</h2>
			<h4>Please try again</h4>
			<h4>If this keeps happening, please contact me</h4>
		</ma>
	`
)
