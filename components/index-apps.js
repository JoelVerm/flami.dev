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
export function setDisplayedWidget(widget) {
    for (let key in widgets) {
        widgets[key].setDisplay(false)
    }
    widgets[widget].setDisplay(true)
}

export const page = () => html`
    <h1 class="title">Apps</h1>
    <p>Lorem ipsum</p>
    ${Object.values(widgets).map(o => o.render())}
`
