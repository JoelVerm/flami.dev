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
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" />
        </div>
        <div>
            <label for="password">Password</label>
            <input type="text" id="password" name="password" placeholder="Password" />
        </div>
		<div><button type="submit">Login</button></div>
	</form>
`
