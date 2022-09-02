import { navbar, navItem, activePage } from '../components/navbar.js'

flami(() => html`
    <style>${`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Roboto:wght@300&display=swap');
        body {
            overflow: hidden;
            --color-main-1: #F6757A;
            --color-main-2: #FEAE35;
            --color-bg: #EAD4AA;
            --color-contrast: #181425;
            background-color: var(--color-bg);
        }
        * { font-family: 'JetBrains Mono', monospace; }
        p { font-family: 'Roboto', sans-serif; }
        .main-container {
            position: relative;
            top: 0; left: calc(${activePage}*-100vw);
            display: flex;
            transition: left 0.5s;
        }
        .main-container > div {
            height: 100vh;
            width: 100vw;
            flex-shrink: 0;
        }
    `}</style>
    <div class="main-container">
        <div class="home-container">
            <h1>Home</h1>
            <p>Lorem ipsum</p>
        </div>
        <div class="apps-container">
            <h1>Apps</h1>
            <p>Lorem ipsum</p>
        </div>
    </div>
    ${navbar(navItem('Home', 'home-outline'), navItem('Apps', 'apps-outline'))}
`)
