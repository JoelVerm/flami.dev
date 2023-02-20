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
        --color-main-1: #e4a672;
        --color-main-2: #e4a672;
        --color-contrast: #181425;
        --color-bg: #ead4aa;
        --color-nav-contrast: var(--color-contrast);
        background-color: var(--color-bg);
        color: var(--color-contrast);
        --blob1: blob1 20s cubic-bezier(.2,0,.8,1) infinite;
        --blob2: blob2 20s cubic-bezier(.2,0,.8,1) infinite;
        --blob3: blob3 20s cubic-bezier(.2,0,.8,1) infinite;
        --blob4: blob4 20s cubic-bezier(.2,0,.8,1) infinite;
        --blob5: blob5 20s cubic-bezier(.2,0,.8,1) infinite;
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

    @keyframes blob1 {
        0%, 100% {
            border-radius: 59% 41% 39% 61% / 44% 44% 56% 56%;
        }
        10% {
            border-radius: 60% 40% 38% 62% / 52% 49% 51% 48%;
        }
        20% {
            border-radius: 41% 59% 58% 42% / 39% 35% 65% 61%;
        }
        30% {
            border-radius: 52% 48% 61% 39% / 55% 46% 54% 45%;
        }
        40% {
            border-radius: 59% 41% 46% 54% / 48% 48% 52% 52%;
        }
        50% {
            border-radius: 37% 63% 46% 54% / 47% 62% 38% 53%;
        }
        60% {
            border-radius: 35% 65% 58% 42% / 59% 49% 51% 41%;
        }
        70% {
            border-radius: 59% 41% 48% 52% / 63% 52% 48% 37%;
        }
        80% {
            border-radius: 58% 42% 56% 44% / 39% 40% 60% 61%;
        }
        90% {
            border-radius: 47% 53% 48% 52% / 58% 56% 44% 42%;
        }
    }

    @keyframes blob2 {
        0%, 100% {
            border-radius: 52% 48% 59% 41% / 41% 61% 39% 59%;
        }
        10% {
            border-radius: 63% 37% 47% 53% / 45% 60% 40% 55%;
        }
        20% {
            border-radius: 53% 47% 60% 40% / 44% 40% 60% 56%;
        }
        30% {
            border-radius: 50% 50% 57% 43% / 55% 55% 45% 45%;
        }
        40% {
            border-radius: 55% 45% 35% 65% / 37% 35% 65% 63%;
        }
        50% {
            border-radius: 63% 37% 41% 59% / 61% 50% 50% 39%;
        }
        60% {
            border-radius: 41% 59% 64% 36% / 36% 58% 42% 64%;
        }
        70% {
            border-radius: 51% 49% 46% 54% / 55% 54% 46% 45%;
        }
        80% {
            border-radius: 59% 41% 59% 41% / 58% 40% 60% 42%;
        }
        90% {
            border-radius: 46% 54% 57% 43% / 56% 47% 53% 44%;
        }
    }


    @keyframes blob3 {
        0%, 100% {
            border-radius: 46% 54% 57% 43% / 39% 60% 40% 61%;
        }
        10% {
            border-radius: 37% 63% 41% 59% / 35% 60% 40% 65%;
        }
        20% {
            border-radius: 38% 62% 61% 39% / 60% 59% 41% 40%;
        }
        30% {
            border-radius: 44% 56% 38% 62% / 54% 39% 61% 46%;
        }
        40% {
            border-radius: 39% 61% 37% 63% / 36% 55% 45% 64%;
        }
        50% {
            border-radius: 48% 52% 41% 59% / 54% 46% 54% 46%;
        }
        60% {
            border-radius: 41% 59% 48% 52% / 53% 47% 53% 47%;
        }
        70% {
            border-radius: 59% 41% 54% 46% / 39% 43% 57% 61%;
        }
        80% {
            border-radius: 41% 59% 39% 61% / 61% 45% 55% 39%;
        }
        90% {
            border-radius: 45% 55% 57% 43% / 38% 42% 58% 62%;
        }
    }


    @keyframes blob4 {
        0%, 100% {
            border-radius: 39% 61% 50% 50% / 64% 62% 38% 36%;
        }
        10% {
            border-radius: 41% 59% 35% 65% / 54% 61% 39% 46%;
        }
        20% {
            border-radius: 59% 41% 45% 55% / 41% 35% 65% 59%;
        }
        30% {
            border-radius: 59% 41% 53% 47% / 46% 54% 46% 54%;
        }
        40% {
            border-radius: 47% 53% 35% 65% / 62% 38% 62% 38%;
        }
        50% {
            border-radius: 62% 38% 36% 64% / 57% 42% 58% 43%;
        }
        60% {
            border-radius: 55% 45% 50% 50% / 54% 44% 56% 46%;
        }
        70% {
            border-radius: 40% 60% 49% 51% / 59% 39% 61% 41%;
        }
        80% {
            border-radius: 61% 39% 49% 51% / 38% 43% 57% 62%;
        }
        90% {
            border-radius: 60% 40% 63% 37% / 46% 39% 61% 54%;
        }
    }

    @keyframes blob5 {
        0%, 100% {
            border-radius: 64% 36% 40% 60% / 44% 58% 42% 56%;
        }
        10% {
            border-radius: 35% 65% 41% 59% / 60% 41% 59% 40%;
        }
        20% {
            border-radius: 60% 40% 63% 37% / 43% 42% 58% 57%;
        }
        30% {
            border-radius: 55% 45% 45% 55% / 49% 63% 37% 51%;
        }
        40% {
            border-radius: 61% 39% 48% 52% / 58% 64% 36% 42%;
        }
        50% {
            border-radius: 45% 55% 57% 43% / 52% 57% 43% 48%;
        }
        60% {
            border-radius: 55% 45% 49% 51% / 45% 56% 44% 55%;
        }
        70% {
            border-radius: 35% 65% 44% 56% / 37% 57% 43% 63%;
        }
        80% {
            border-radius: 40% 60% 63% 37% / 63% 39% 61% 37%;
        }
        90% {
            border-radius: 41% 59% 43% 57% / 52% 48% 52% 48%;
        }
    }
`
