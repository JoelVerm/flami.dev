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
