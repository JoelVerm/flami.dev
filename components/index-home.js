export const page = () => html`
    <style>
        .home-title-container {
            flex-wrap: wrap;
        }
        .home-title {
            font-size: 3em;
        }
        .home-profile-image {
            border-radius: 10000px;
            margin-left: 50px;
            height: 8em;
        }
        .flamivaar {
            background-color: #fff;
        }
        .home-skills {
            flex-wrap: wrap;
        }
        .home-skills div {
            width: 100px;
            position: relative;
        }
        .home-skills div i {
            font-size: 3em;
            transition: transform 0.2s;
        }
        .home-skills div:hover i {
            transform: rotate(10deg);
        }
        .home-skills div h5 {
            margin-top: 10px;
        }
        .home-apps-promotion {
            position: absolute;
            bottom: 100px;
            left: 50vw;
            transform: translateX(calc(-50% - 70px));
        }
        .home-apps-arrow {
            position: relative;
            top: 30px;
            left: 10px;
            width: 70px;
        }
        .home-apps-arrow path {
            stroke: var(--color-contrast);
            fill: var(--color-contrast);
        }
    </style>
    <div class="horizontal home-title-container">
        <h1 class="home-title">Hi,<br>I'm FlamiDev</h1>
        <img class="home-profile-image" src="me.jpg"></img>
        <img class="home-profile-image flamivaar" src="flamivaar.png"></img>
    </div>
    <h4>My name is Joël Vermeulen and I live in The Netherlands.</h4>
    <h4>I'm a game designer, web developer and all-round programmer.</h4>
    <br>
    <h2>My skills</h2>
    <div class="horizontal home-skills">
        <div class="vertical">
            <i class="devicon-unity-original"></i>
            <h5>Unity</h5>
        </div>
        <div class="vertical">
            <i class="devicon-csharp-plain"></i>
            <h5>C#</h5>
        </div>
        <div class="vertical">
            <i class="devicon-html5-plain"></i>
            <h5>HTML</h5>
        </div>
        <div class="vertical">
            <i class="devicon-css3-plain"></i>
            <h5>CSS</h5>
        </div>
        <div class="vertical">
            <i class="devicon-javascript-plain"></i>
            <h5>JavaScript</h5>
        </div>
        <div class="vertical">
            <i class="devicon-nodejs-plain"></i>
            <h5>NodeJS</h5>
        </div>
        <div class="vertical">
            <i class="devicon-python-plain"></i>
            <h5>Python</h5>
        </div>
        <div class="vertical">
            <i class="devicon-tensorflow-original"></i>
            <h5>TensorFlow</h5>
        </div>
    </div>
    <br>
    <p>
        <h2>Contact</h2>
        You can find me on twitter: <a href="http://twitter.com/flamidev">@flamidev</a><br>
        E-mail me: <a href="mailto:flamidev@outlook.com">flamidev@outlook.com</a>
    </p>
    <div class="home-apps-promotion horizontal">
        <h5>Projects</h5>
        <svg class="home-apps-arrow" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <defs></defs>
            <path d="M 35 45 C 140 50 333 170 375 325 C 280 177 130 80 35 45 Z"></path>
            <path d="M 400 330 C 405 325 395 245 400 240 C 410 240 425 335 415 345 C 410 355 305 365 305 355 C 305 345 395 340 400 330 Z" transform="matrix(0.9, 0.4, -0.4, 0.9, 165, -100)"></path>
        </svg>
    </div>
`
