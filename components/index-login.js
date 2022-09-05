export const page = () => html`
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
	<form class="center" action="login" method="post">
        <div>
            <label for="login-name">Name</label>
            <input type="text" id="login-name" name="login-name" placeholder="Name" />
        </div>
        <div>
            <label for="login-password">Password</label>
            <input type="text" id="login-password" name="login-password" placeholder="Password" />
        </div>
		<div><button type="submit">Login</button></div>
	</form>
`
