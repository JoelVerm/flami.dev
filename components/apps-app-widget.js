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
    }
    renderPreviewImage() {
        return html`
            <img src=${this.images[0]} tabindex="0"></img>
        `
    }
    render() {
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
                    .app-widget-container {
                        height: calc(100vh - 2 * max(10vh, 50px) - 70px);
                    }
                    .app-widget-container h1 {
                        height: 3rem;
                        font-size: 2.3rem;
                    }
                    .app-widget-container > div {
                        width: 50%;
                        height: 100%;
                    }
                    .app-widget-container .app-widget-text-box {
                        padding: 10px;
                        padding-top: 15px;
                    }
                    .app-widget-image-box {
                        overflow-y: auto;
                    }
                    .app-widget-container .app-widget-image-box img {
                        width: 100%;
                        object-fit: cover;
                    }
                `}
            </style>
            <article class="app-widget-container">
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
