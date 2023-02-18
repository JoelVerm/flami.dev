import { page as skillBubbles } from './home-skill-bubbles.js'

export const page = () => html`
    <style>
        .home-title-container {
            flex-wrap: wrap;
        }
        .home-title {
            font-size: 3em;
        }
        .home-profile-image {
            border-radius: 1000vw;
            margin-left: 50px;
            height: 8em;
            animation: var(--blob4);
        }
        .flamivaar {
            background-color: #fff;
        }
    </style>
    <article class="horizontal home-title-container">
        <h1 class="home-title">Hi,<br>I'm FlamiDev</h1>
        <img class="home-profile-image" src="me.jpg"></img>
        <img class="home-profile-image flamivaar" src="flamivaar.png"></img>
    </article>
    <h4>My name is Joël Vermeulen and I live in The Netherlands.</h4>
    <h4>I'm a game designer, web developer and all-round programmer.</h4>
    <br>
    <h2>My skills</h2>
    ${skillBubbles()}
    <p>
        <h2>Contact</h2>
        You can find me on twitter: <a href="http://twitter.com/flamidev">@flamidev</a><br>
        E-mail me: <a href="mailto:flamidev@outlook.com">flamidev@outlook.com</a>
    </p>
`
