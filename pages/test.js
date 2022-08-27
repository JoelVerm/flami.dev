import { navbar, navItem, activePage } from '../components/navbar.js'

flami(() => html`
    <style>
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Roboto:wght@300&display=swap');
        body {
            --color-main-1: #F6757A;
            --color-main-2: #FEAE35;
            --color-bg: #EAD4AA;
            --color-contrast: #181425;
            background-color: var(--color-bg);
        }
        * { font-family: 'JetBrains Mono', monospace; }
        p { font-family: 'Roboto', sans-serif; }
    </style>
    ${navbar(navItem('Home', 'home-outline'), navItem('Apps', 'apps-outline'))}
`)
