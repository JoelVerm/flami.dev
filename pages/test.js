import { navbar, navItem } from '../components/navbar.js'

flami(() => html`
    <style>
        body {
            --color-main-1: #F6757A;
            --color-main-2: #FEAE35;
            --color-bg: #EAD4AA;
            --color-contrast: #181425;
            background-color: var(--color-bg);
        }
    </style>
    ${navbar(navItem('home', 'home-outline'), navItem('apps', 'apps-outline'))}
`)
