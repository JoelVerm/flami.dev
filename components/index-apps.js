import { AppWidget } from './apps-app-widget.js'

/**
 * @type {{String: AppWidget}}
 */
const widgets = {
    Odweens: new AppWidget('Odweens', `A game made with Godot.`, [
        'MangroveTemp.webp'
    ]),
    'Odweens unity': new AppWidget(
        'Odweens',
        `The first version of the game, made with Unity.`,
        ['MangroveTemp.webp']
    ),
    'flami.dev': new AppWidget('Flami.dev', `This website!`),
    chessJ: new AppWidget('ChessJ', `A simple chess AI`, ['chessJ.png'])
}

export const page = () => html`
    <style></style>
    <h1 class="title">Apps</h1>
    <div class="index-apps-container">
        ${Object.values(widgets).map(e => e.render())}
    </div>
`

export const imageWidget = () => html`
    <style>
        .apps-image-widget {
            height: calc(50vh - 100px);
        }
        .apps-image-widget > img {
            position: absolute;
            border-radius: 5vw;
            width: 10vw;
            height: 10vw;
            z-index: 1;
            object-fit: cover;
            transition: width 0.5s, height 0.5s, top 0.5s, left 0.5s,
                z-index 0s 0.5s;
        }
        .apps-image-widget > img:nth-child(1) {
            left: 5vw;
            top: 5vw;
        }
        .apps-image-widget > img:nth-child(2) {
            left: 20vw;
            top: 5vw;
        }
        .apps-image-widget > img:nth-child(3) {
            left: 35vw;
            top: 5vw;
        }
        .apps-image-widget > img:nth-child(4) {
            left: 50vw;
            top: 5vw;
        }
        .apps-image-widget > img:hover,
        .apps-image-widget > img:focus {
            width: 90vw;
            height: calc(50vh - 20px - 5vw);
            left: 5vw;
            top: 5vw;
            z-index: 5;
            transition: width 0.5s, height 0.5s, top 0.5s, left 0.5s,
                z-index 0s 0s;
        }
    </style>
    <div class="apps-image-widget">
        ${Object.entries(widgets).map(e => e[1].renderPreviewImage())}
    </div>
`
