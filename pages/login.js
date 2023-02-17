import { page as loginPage } from '../components/index-login.js'
import { css } from '../components/main-css.js'
import { page as cursor } from '../components/cursor.js'

flami(
    () => html`
        <style>
            ${css}
        </style>
        ${cursor()} ${loginPage()}
    `
)
