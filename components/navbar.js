export let activePage = parseInt(
	sessionStorage.getItem('activeNavPageFor:' + window.location.pathname) ?? 0
)
const activate = i => () => {
    activePage = i
	sessionStorage.setItem('activeNavPageFor:' + window.location.pathname, i)
	update()
}
export const navbar = (...items) => {
	items = items.map((item, i) => item(activate(i)))
	return html`
		<style>
			${`
            .navigation,
            .navigation * {
                margin: 0;
                padding: 0;
            }
            .navigation {
                position: fixed;
                bottom: 0px;
                left: 0px;
                width: 100vw;
                height: 70px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .nav-list-item {
                z-index: 1;
                width: 70px;
                height: 70px;
                list-style: none;
            }
            .nav-list-item a {
                position: relative;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                font-weight: 500;
                text-align: center;
            }
            .nav-list-item a .icon {
                position: relative;
                display: block;
                transition: transform 0.5s, color 0.5s;
                color: var(--color-nav-contrast);
                font-size: 1.5em;
                line-height: 75px;
                text-align: center;
            }
            .nav-list-item[active="true"] a .icon {
                transform: translateY(-32px);
                color: var(--color-contrast);
            }
            .nav-list-item a .text {
                position: absolute;
                opacity: 0;
                transform: translateY(20px);
                transition: transform 0.5s, opacity 0.5s;
                color: var(--color-nav-contrast);
                font-size: 00.75em;
                font-weight: 400;
                letter-spacing: 0.05em;
            }
            .nav-list-item[active="true"] a .text {
                opacity: 1;
                transform: translateY(10px);
            }

            .nav-svg-bar {
                position: absolute;
                height: 100%;
                left: 50%;
                top: 0px;
                transition: transform 0.5s;
                transform: translateX(calc(-50% + ${
					70 * (-(items.length - 1) / 2 + activePage)
				}px));
            }
            .nav-svg-bar path {
                fill: url(#nav-svg-grad1);
            }
            #nav-svg-grad1-stop1 {
                stop-color: var(--color-main-1);
                stop-opacity: 1;
            }
            #nav-svg-grad1-stop2 {
                stop-color: var(--color-main-2);
                stop-opacity: 1;
            }
        `}
		</style>
		<ul class="navigation">
			${items.map((e, i) => e(i == activePage))}
			<svg
				class="nav-svg-bar"
				viewBox="0 0 3000 50"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<linearGradient
						id="nav-svg-grad1"
						x1="0%"
						y1="0%"
						x2="100%"
						y2="0%"
					>
						<stop id="nav-svg-grad1-stop1" offset="40%" />
						<stop id="nav-svg-grad1-stop2" offset="60%" />
					</linearGradient>
				</defs>
				<path
					d="M 0 0 L 1450 0 C 1475 0 1475 20 1500 20 C 1525 20 1525 0 1550 0 L 3000 0 L 3000 50 L 0 50 L 0 0 Z"
				></path>
			</svg>
		</ul>
	`
}

export const navItem = (name, iconName) => {
	return activate => active =>
		html`
			<li
				class="nav-list-item"
				id=${`menu-${name}`}
				onclick=${activate}
				active=${active}
			>
				<a href="#">
					<span class="icon">
						<ion-icon name=${iconName}></ion-icon>
					</span>
					<span class="text">${name}</span>
				</a>
			</li>
		`
}
