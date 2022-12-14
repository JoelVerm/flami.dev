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
    <form class="center" action="api/buyGoodMarkLicense" method="post">
        <div>
            <label for="amount">Amount</label>
            <input
                type="text"
                id="amount"
                name="amount"
                placeholder="Amount"
                pattern="[0-9]+"
            />
        </div>
        <div><button type="submit">Buy</button></div>
    </form>
`
