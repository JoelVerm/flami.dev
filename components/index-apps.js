import { AppWidget } from './apps-app-widget.js'

/**
 * @type {{String: AppWidget}}
 */
const widgets = {
    Odweens: new AppWidget(
        'Odweens',
        `A game made with Godot.`,
        ['MangroveTemp.webp'],
        ['godot-plain']
    ),
    'Odweens unity': new AppWidget(
        'Odweens',
        `The first version of the game, made with Unity.`,
        ['MangroveTemp.webp'],
        ['unity-original', 'csharp-plain']
    ),
    'flami.dev': new AppWidget(
        'Flami.dev',
        `This website!`,
        [],
        ['html5-plain', 'css3-plain', 'javascript-plain', 'nodejs-plain']
    ),
    chessJ: new AppWidget(
        'ChessJ',
        `A simple chess AI`,
        ['chessJ.png'],
        ['python-plain', 'tensorflow-original']
    )
}
export function setDisplayedWidget(widget) {
    for (let key in widgets) {
        widgets[key].setDisplay(false)
    }
    widgets[widget].setDisplay(true)
    update()
}

export const page = () => html`
    <style>
        .index-apps-container {
            padding-bottom: calc(2 * max(10vh, 50px) - 70px);
        }
    </style>
    <h1 class="title">Apps</h1>
    <div class="index-apps-container">
        ${Object.entries(widgets).map(e =>
            e[1].render(() => setDisplayedWidget(e[0]))
        )}
    </div>
`
