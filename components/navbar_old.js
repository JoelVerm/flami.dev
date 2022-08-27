export const navbar = items => {
    let active = 0
	const activate = i => () => active = i
    items = items.map((item, i) => item(activate(i)))
	return html`
		<style>
			${`body {
                --nav-color-main: var(--color-main);
                --nav-color-contrast: var(--color-bg);
                --nav-color-bg: var(--color-contrast);
            }

            .navigation,
            .navigation * {
                margin: 0;
                padding: 0;
            }

            .navigation {
                position: fixed;
                bottom: 0px;
                width: 100vw;
                height: 70px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: var(--nav-color-bg);
            }

            .navigation ul {
                display: flex;
            }

            .navigation ul li {
                position: relative;
                z-index: 1;
                width: 70px;
                height: 70px;
                list-style: none;
            }

            .navigation ul li a {
                position: relative;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                font-weight: 500;
                text-align: center;
            }

            .navigation ul li a .icon {
                position: relative;
                display: block;
                transition: transform 0.5s;
                color: var(--nav-color-contrast);
                font-size: 1.5em;
                line-height: 75px;
                text-align: center;
            }

            .navigation ul li.active a .icon {
                transform: translateY(-32px);
            }

            .navigation ul li a .text {
                position: absolute;
                opacity: 0;
                transform: translateY(20px);
                transition: transform 0.5s, opacity 0.5s;
                color: var(--nav-color-contrast);
                font-size: 00.75em;
                font-weight: 400;
                letter-spacing: 0.05em;
            }

            .navigation ul li.active a .text {
                opacity: 1;
                transform: translateY(10px);
            }

            .indicator {
                position: absolute;
                top: -50%;
                width: 70px;
                height: 70px;
                background: var(--nav-color-main);
                border: 6px solid var(--nav-color-contrast);
                border-radius: 50%;
                transition: transform 0.5s;
                transform: translateX(calc(70px * ${active}));
            }

            .indicator::before {
                content: '';
                position: absolute;
                top: 50%;
                left: -22px;
                width: 20px;
                height: 20px;
                background: transparent;
                border-top-right-radius: 20px;
                box-shadow:  1px -10px 0 0 var(--nav-color-contrast);
            }

            .indicator::after {
                content: '';
                position: absolute;
                top: 50%;
                right: -22px;
                width: 20px;
                height: 20px;
                background: transparent;
                border-top-left-radius: 20px;
                box-shadow:  -1px -10px 0 0 var(--nav-color-contrast);
            }

        `}
		</style>
		<div class="navigation">
			<ul>
				${items}
				<div class="indicator">
					<svg
						viewBox="0 0 500 500"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs></defs>
						<path
							style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);"
							d="M 0 180 L 200 180 C 225 180 225 200 250 200 C 275 200 275 180 300 180 L 500 180 L 500 230 L 0 230 L 0 180 Z"
						></path>
					</svg>
				</div>
			</ul>
		</div>
		<script
			type="module"
			src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
		></script>
	`
}

export const navItem = (id, text, iconName) => {
	return activate => {
		return html`
            <li class="nav-list" id=${`menu-${id}`} onclick=${activate}">
                <a href="#">
                    <span class="icon">
                        <ion-icon name=${iconName}></ion-icon>
                    </span>
                    <span class="text">${text}</span>
                </a>
            </li>
        `
	}
}
