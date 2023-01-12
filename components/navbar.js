export const navbar = (...items) => html`
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
            z-index: 10;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: bottom 0.5s ease;
        }
        .navigation:hover {
            bottom: 10px;
        }

        .nav-list-item {
            z-index: 12;
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
            transition: translate 0.5s, color 0.5s;
            color: var(--color-nav-contrast);
            font-size: 1.5em;
            line-height: 75px;
            text-align: center;
        }
        .nav-list-item a .text {
            position: absolute;
            opacity: 0;
            translate: 0px 20px;
            transition: translate 0.5s, opacity 0.5s;
            color: var(--color-nav-contrast);
            font-size: 00.75em;
            font-weight: 400;
            letter-spacing: 0.05em;
        }
        .navigation:hover .nav-list-item a .text {
            opacity: 1;
        }

        .nav-svg-bar {
            position: absolute;
            height: calc(100% + 10px);
            left: 50%;
            top: 0px;
            transition: translate 0.5s;
            translate: calc(-50% + 70px * (-${
                (items.length - 1) / 2
            } + var(--active-nav-item))) 0px;
        }
        body {
            --active-nav-item: 0;
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
    <nav class="navigation">
        ${items.map((e, i) => e(i))}
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
    </nav>
`

export const navItem = (name, iconName) => i =>
    html`
        <style>
            ${`
            body:has(.main-container section:target#nav-${i}) {
                --active-nav-item: ${i};
            }

            body:has(.main-container section:target#nav-${i})
                .nav-list-item#menu-${name}
                a
                .icon {
                translate: 0px -32px;
                color: var(--color-contrast);
            }
            body:has(.main-container section:target#nav-${i})
                .navigation:not(:hover)
                .nav-list-item#menu-${name}
                a
                .text {
                opacity: 1;
                translate: 0px 10px;
            }
        `}
        </style>
        <div class="nav-list-item" id=${`menu-${name}`}>
            <a href=${`#nav-${i}`}>
                <span class="icon">
                    <ion-icon name=${iconName}></ion-icon>
                </span>
                <span class="text">${name}</span>
            </a>
        </div>
    `
