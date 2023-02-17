import { css } from '../components/main-css.js'
import { page as cursor } from '../components/cursor.js'

flami(
    () => html`
        <style>
            ${css}
        </style>
        <style>
            form {
                display: flex;
                flex-direction: column;
            }
            form div {
                display: flex;
                flex-direction: column;
                margin-bottom: 10px;
            }
        </style>
        ${cursor()}
        <form class="center" action="register" method="post">
            <div>
                <label for="register-name">Name</label>
                <input
                    type="text"
                    id="register-name"
                    name="register-name"
                    placeholder="Name"
                />
            </div>
            <div>
                <label for="register-email">Email</label>
                <input
                    type="text"
                    id="register-email"
                    name="register-email"
                    placeholder="email@site.com"
                />
            </div>
            <div>
                <label for="register-password">Password</label>
                <input
                    type="password"
                    id="register-password"
                    name="register-password"
                    placeholder="Password"
                />
            </div>
            <div>
                <label for="register-password-confirm">Confirm password</label>
                <input
                    type="password"
                    id="register-password-confirm"
                    name="register-password-confirm"
                    placeholder="Confirm password"
                />
            </div>
            <div><button type="submit">Register</button></div>
            <div>
                ${window.hasOwnProperty('registerStatus')
                    ? registerStatus === 'invalidPwd'
                        ? 'Passwords do not match. Please try again...'
                        : registerStatus === 'invalidName'
                        ? 'Invalid username. Please choose another one'
                        : ''
                    : ''}
            </div>
        </form>
    `
)
