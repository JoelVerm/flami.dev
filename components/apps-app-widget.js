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
                        padding: 0px;
                        display: flex;
                        flex-direction: row;
                        margin: 0.5rem;
                    }
                    .app-widget-container:nth-of-type(2n) {
                        flex-direction: row-reverse;
                    }
                    .app-widget-container h1 {
                        height: 3rem;
                        font-size: 2.3rem;
                    }
                    .app-widget-container .app-widget-text-box {
                        padding: 0px 30px;
                        flex: 3;
                    }
                    .app-widget-container:nth-of-type(2n + 1) .app-widget-text-box {
                        text-align: right;
                    }
                    .app-widget-image-box {
                        overflow-y: auto;
                        flex: 2;
                    }
                    .app-widget-container .app-widget-image-box img {
                        width: 100%;
                        object-fit: cover;
                        border-radius: 10px;
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
