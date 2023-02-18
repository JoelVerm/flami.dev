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
        --blob1: blob1 20s ease-in-out infinite;
        --blob2: blob2 20s ease-in-out infinite;
        --blob3: blob3 20s ease-in-out infinite;
        --blob4: blob4 20s ease-in-out infinite;
        --blob5: blob5 20s ease-in-out infinite;
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
            border-radius: 67% 70% 62% 61% / 56% 69% 73% 67%;
        }
        20% {
            border-radius: 57% 63% 67% 62% / 68% 69% 70% 69%;
        }
        30% {
            border-radius: 55% 66% 68% 69% / 65% 56% 69% 69%;
        }
        40% {
            border-radius: 72% 68% 69% 63% / 56% 69% 70% 61%;
        }
        50% {
            border-radius: 63% 55% 56% 64% / 73% 64% 67% 67%;
        }
        60% {
            border-radius: 72% 68% 70% 55% / 60% 66% 64% 55%;
        }
        70% {
            border-radius: 59% 66% 70% 74% / 63% 61% 72% 69%;
        }
        80% {
            border-radius: 73% 59% 61% 65% / 61% 74% 69% 74%;
        }
        90% {
            border-radius: 72% 68% 67% 55% / 58% 57% 58% 72%;
        }
    }

    @keyframes blob2 {
        0%, 100% {
            border-radius: 56% 57% 69% 59% / 72% 56% 64% 73%;
        }
        20% {
            border-radius: 63% 62% 62% 62% / 64% 69% 56% 64%;
        }
        30% {
            border-radius: 68% 56% 59% 64% / 59% 58% 67% 60%;
        }
        40% {
            border-radius: 72% 72% 65% 67% / 63% 71% 72% 70%;
        }
        50% {
            border-radius: 58% 74% 63% 65% / 56% 57% 64% 60%;
        }
        60% {
            border-radius: 67% 73% 61% 73% / 73% 64% 56% 71%;
        }
        70% {
            border-radius: 59% 71% 59% 69% / 74% 62% 62% 59%;
        }
        80% {
            border-radius: 62% 69% 64% 69% / 55% 61% 71% 65%;
        }
        90% {
            border-radius: 56% 70% 58% 67% / 64% 57% 60% 73%;
        }
    }


    @keyframes blob3 {
        0%, 100% {
            border-radius: 68% 63% 74% 69% / 74% 63% 67% 67%;
        }
        20% {
            border-radius: 68% 59% 63% 56% / 73% 74% 61% 59%;
        }
        30% {
            border-radius: 59% 59% 57% 59% / 69% 62% 55% 63%;
        }
        40% {
            border-radius: 72% 65% 74% 55% / 57% 60% 65% 74%;
        }
        50% {
            border-radius: 62% 58% 56% 72% / 70% 55% 63% 57%;
        }
        60% {
            border-radius: 69% 59% 69% 60% / 71% 70% 55% 57%;
        }
        70% {
            border-radius: 64% 59% 65% 69% / 74% 71% 62% 63%;
        }
        80% {
            border-radius: 71% 63% 67% 61% / 73% 67% 71% 64%;
        }
        90% {
            border-radius: 56% 62% 57% 58% / 66% 59% 65% 70%;
        }
    }


    @keyframes blob4 {
        0%, 100% {
            border-radius: 61% 61% 65% 57% / 66% 59% 65% 70%;
        }
        20% {
            border-radius: 64% 72% 55% 74% / 65% 73% 61% 61%;
        }
        30% {
            border-radius: 67% 57% 56% 56% / 69% 55% 60% 60%;
        }
        40% {
            border-radius: 56% 58% 57% 69% / 56% 74% 57% 57%;
        }
        50% {
            border-radius: 63% 65% 65% 66% / 64% 58% 70% 58%;
        }
        60% {
            border-radius: 69% 74% 60% 70% / 71% 62% 70% 70%;
        }
        70% {
            border-radius: 72% 55% 65% 62% / 61% 71% 65% 60%;
        }
        80% {
            border-radius: 66% 61% 56% 64% / 68% 60% 73% 67%;
        }
        90% {
            border-radius: 58% 73% 55% 60% / 65% 60% 58% 62%;
        }
    }

    @keyframes blob5 {
        0%, 100% {
            border-radius: 60% 57% 74% 59% / 57% 64% 74% 71%;
        }
        20% {
            border-radius: 68% 60% 67% 70% / 67% 66% 68% 56%;
        }
        30% {
            border-radius: 56% 59% 69% 57% / 60% 57% 72% 62%;
        }
        40% {
            border-radius: 61% 62% 71% 59% / 55% 56% 74% 61%;
        }
        50% {
            border-radius: 61% 61% 72% 62% / 68% 70% 68% 74%;
        }
        60% {
            border-radius: 66% 66% 69% 65% / 67% 58% 61% 73%;
        }
        70% {
            border-radius: 74% 59% 60% 59% / 66% 72% 74% 55%;
        }
        80% {
            border-radius: 55% 71% 61% 60% / 64% 60% 61% 64%;
        }
        90% {
            border-radius: 60% 70% 68% 63% / 68% 72% 57% 69%;
        }
    }
`
