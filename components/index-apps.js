import { page as appWidget } from './apps-app-widget.js'
export const page = () => html`
	<h1 class="title">Apps</h1>
	<p>Lorem ipsum</p>
	${appWidget('Odweens', 'A game made with Godot', 'MangroveTemp.webp', true)}
`
