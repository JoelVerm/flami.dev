import { page as indexPage } from '../components/index-home.js'
import { page as appsPage, imageWidget } from '../components/index-apps.js'
import { page as loginPage } from '../components/index-login.js'
import { css } from '../components/main-css.js'
import { navbar, navItem } from '../components/navbar.js'

flami(
    () => html`
        <style>
            ${css}
        </style>
        <style>
            ${`
            .main-container {
                position: relative;
                width: 100vw;
                height: 100vh;
                transition: left 0.5s;
                overflow-y: scroll;
                overflow-x: hidden;
                padding-bottom: 100px;
                scroll-behavior: smooth;
            }
            .main-container > section {
                position: relative;
                width: 100vw;
                padding-bottom: 80px;
                padding-left: 50px;
                padding-right: 50px;
            }
            .login-container {
                min-height: 100vh;
            }
        `}
        </style>
        <main class="main-container">
            <section class="home-container">${imageWidget()}</section>
            <section class="home-container" id="nav-0">${indexPage()}</section>
            <section class="apps-container" id="nav-1">${appsPage()}</section>
            <section class="login-container" id="nav-2">${loginPage()}</section>
        </main>
        ${navbar(
            navItem('Home', 'home-outline'),
            navItem('Apps', 'apps-outline'),
            navItem('Login', 'log-in-outline')
        )}
    `
)
