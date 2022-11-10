export const css = `
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Roboto:wght@300&display=swap');
    * {
        box-sizing: border-box;
        scrollbar-color: linear-gradient(var(--color-main-1), var(--color-main-2)) rgba(0, 0, 0, 0);
    }
    *::-webkit-scrollbar {
        background: rgba(0, 0, 0, 0);
    }
    *::-webkit-scrollbar-thumb {
        background: linear-gradient(var(--color-main-1), var(--color-main-2));
    }
    *::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0);
    }
    body {
        overflow: hidden;
        margin: 0;
        --color-main-1: #F6757A;
        --color-main-2: #FEAE35;
        --color-contrast: #EAD4AA;
        --color-bg: #181425;
        --color-nav-contrast: var(--color-bg);
        background-color: var(--color-bg);
        color: var(--color-contrast);
    }
    a { color: var(--color-contrast); }
    * { font-family: 'JetBrains Mono', monospace; }
    p { font-family: 'Roboto', sans-serif; }
    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
    }
    .horizontal {
        display: flex;
        align-items: center;
    }
    .vertical {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`
