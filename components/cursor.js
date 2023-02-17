export const page = () => html`
    <style>
        ${`
        .cursor {
            background: var(--color-main-1);
            height: 200px;
            width: 200px;
            position: fixed;
            left: ${mouseX}px;
            top: ${mouseY}px;
            translate: -50% -50%;
            transition: opacity 0.5s;
            opacity: ${mouseX == 0 && mouseY == 0 ? 0 : 1};
            animation: cursorBlob 2s linear infinite;
        }
        @keyframes cursorBlob {
            0%, 100% {
                border-radius: 45% 33% 32% 49% / 32% 48% 34% 50%;
            }
            25% {
                border-radius: 35% 38% 45% 32% / 47% 32% 36% 46%;
            }
            50% {
                border-radius: 50% 34% 32% 33%/ 36% 47% 49% 38%;
            }
            75% {
                border-radius: 32% 42% 46% 41% / 45% 36% 40% 45%;
            }
        }
    `}
    </style>
    <div class="cursor"></div>
`

let mouseX = 0
let mouseY = 0
document.body.addEventListener('mousemove', e => {
    mouseX = e.clientX
    mouseY = e.clientY
    update()
})
