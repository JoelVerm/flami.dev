export class AppWidget {
    /**
     * @param {String} title
     * @param {String} text
     * @param {Array<String>} images
     */
    constructor(title, text = '', images = [], icons = []) {
        this.title = title
        this.text = text
        this.images = images
        this.icons = icons
        this.display = false
    }
    /**
     * @param {Boolean} display
     */
    setDisplay(display) {
        this.display = display
    }
    render(linkClicker) {
        return html`
            <style>
                ${`
                    .app-widget-container {
                        background: linear-gradient(90deg, var(--color-main-1), var(--color-main-2)) fixed;
                        border-radius: 25px;
                        padding: 0px;
                        overflow: hidden;
                        color: var(--color-nav-contrast);
                        display: flex;
                        flex-direction: row;
                        width: 100%;
                        height: 4rem;
                        margin: 0.5rem;
                        transition: top 0.5s, left 0.5s, width 0.5s, height 0.5s;
                    }
                    .app-widget-container[data-active] {
                        height: calc(100vh - 2 * max(10vh, 50px) - 70px);
                    }
                    .app-widget-container:not([data-active]) {
                        flex-direction: row-reverse;
                        justify-content: flex-end;
                    }
                    .app-widget-container h1 {
                        height: 3rem;
                        font-size: 2.3rem;
                    }
                    .app-widget-container:not([data-active]) h1 {
                        margin: 0.5rem;
                    }
                    .app-widget-container:not([data-active]) p {
                        display: none;
                    }
                    .app-widget-container[data-active] > div {
                        width: 50%;
                        height: 100%;
                    }
                    .app-widget-container[data-active] .app-widget-text-box {
                        padding: 10px;
                        padding-top: 15px;
                    }
                    .app-widget-image-box {
                        overflow-y: auto;
                    }
                    .app-widget-container:not([data-active]) .app-widget-image-box {
                        height: 100%;
                        width: 3rem;
                        margin-left: 0.5rem;
                        margin-right: 0.5rem;
                        padding-top: 0.5rem;
                    }
                    .app-widget-container:not([data-active]) .app-widget-image-box img {
                        height: 3rem;
                        border-radius: 1000px;
                    }
                    .app-widget-container .app-widget-image-box img {
                        width: 100%;
                        object-fit: cover;
                    }
                    .app-widget-container .app-widget-icon-box {
                        gap: 10px;
                    }
                    .app-widget-container .app-widget-icon-box i {
                        font-size: 2.5rem;
                        width: 3rem;
                    }
                    .app-widget-container:not([data-active]) .app-widget-icon-box {
                        display: none;
                    }
                `}
            </style>
            <article
                class="app-widget-container"
                data-active=${this.display || null}
                onclick=${linkClicker}
            >
                <div class="app-widget-text-box">
                    <div class="app-widget-icon-box horizontal">
                        ${this.icons.map(
                            icon => html`<i class=${`devicon-${icon}`}></i>`
                        )}
                    </div>
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
