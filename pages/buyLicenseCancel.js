import { css } from '../components/main-css.js'

flami(
	() => html`
		<style>
			${css}
		</style>
		<div class="center vertical">
			<h2>Payment failed</h2>
			<h4>Please try again</h4>
			<h4>If this keeps happening, please contact me</h4>
		</div>
	`
)
