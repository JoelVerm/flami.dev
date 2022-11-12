export const page = (title, text, image, display = false) => html`
	<style>
		${`
        .app-widget-container {
            position: absolute;
            top: max(10vh, 50px);
            left: max(10vw, 50px);
            width: calc(100vw - 2 * max(10vw, 50px));
            height: calc(100vh - 2 * max(10vh, 50px) - 70px);
            display: ${display ? 'initial' : 'none'};
            background: linear-gradient(90deg, var(--color-main-1), var(--color-main-2)) fixed;
            border-radius: 25px;
        }
    `}
	</style>
	<article class="app-widget-container"></article>
`
