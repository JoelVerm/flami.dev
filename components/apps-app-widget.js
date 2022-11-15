export class AppWidget {
    /**
     * @param {String} title
     * @param {String} text
     * @param {Array<String>} images
     */
    constructor(title, text = '', images = []) {
        this.title = title
        this.text = text
        this.images = images
        this.display = false
    }
    /**
     * @param {Boolean} display
     */
    setDisplay(display) {
        this.display = display
    }
    render() {
        return html`
            <style>
                ${`
                    .app-widget-container {
                        position: absolute;
                        top: max(10vh, 50px);
                        left: max(10vw, 50px);
                        width: calc(100vw - 2 * max(10vw, 50px));
                        height: calc(100vh - 2 * max(10vh, 50px) - 70px);
                        background: linear-gradient(90deg, var(--color-main-1), var(--color-main-2)) fixed;
                        border-radius: 25px;
                        padding: 0px;
                        overflow: hidden;
                        color: var(--color-nav-contrast);
                        display: flex;
                        flex-direction: row;
                    }
                    .app-widget-container h1 {
                        font-size: 2em;
                    }
                    .app-widget-container > div {
                        width: 50%;
                        height: 100%;
                    }
                    .app-widget-text-box {
                        padding: 10px;
                        padding-top: 15px;
                    }
                    .app-widget-image-box {
                        overflow-y: auto;
                    }
                    .app-widget-image-box img {
                        width: 100%;
                    }
                `}
            </style>
            <article
                class="app-widget-container"
                style=${`display: ${this.display ? 'flex' : 'none'};`}
            >
                <div class="app-widget-text-box">
                    <h1>${this.title}</h1>
                    <p>${this.text}</p>
                </div>
                <div class="app-widget-image-box">
                    ${this.images.map(url => html`<img src=${url}></img>`)}
                </div>
            </article>
        `
    }
}
