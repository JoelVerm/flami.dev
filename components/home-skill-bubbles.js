import { activate, activePage } from './navbar.js'
import { setDisplayedWidget } from './index-apps.js'

const iconsProjects = {
    godot: ['Odweens'],
    unity: ['Odweens unity'],
    csharp: ['Odweens unity'],
    html: ['flami.dev'],
    css: ['flami.dev'],
    js: ['flami.dev'],
    nodejs: ['flami.dev'],
    php: [],
    mysql: [],
    python: ['chessJ'],
    tensorflow: ['chessJ']
}

const clickedIcon = projects => () => {
    setDisplayedWidget(projects[0])
    activate(1)()
}

export const page = () => html`
    <style>
        ${`
        .home-skills {
            position: relative;
            flex-wrap: wrap;
        }
        .home-skills > figure {
            width: 80px;
            height: 80px;
            position: relative;
            top: 0;
            left: 0;
            z-index: 2;
            padding: 5px;
            margin: 5px;
            border-radius: 100000px;
            background: linear-gradient(90deg, var(--color-main-1), var(--color-main-2)) fixed;
            transition: margin 0.5s, top 0.5s ease, left 0.5s ease, width 0.5s ease, height 0.5s ease, font-size 0.5s ease;
        }
        .home-skills > figure i {
            font-size: 3em;
            line-height: 70px;
            transition: rotate 0.5s, line-height 0.5s ease;
        }
        .home-skills > figure:hover {
            margin-top: -5px;
        }
        .home-skills > figure:hover i {
            rotate: 10deg;
        }
        .home-skills > figure .devicon-unity-original {
            padding-right: 8px;
            transition: rotate 0.2s, line-height 0.5s ease, padding 0.5s ease;
        }
    `}
    </style>
    <article class="horizontal home-skills">
        ${dynamicSkillIcon('godot')}
        ${dynamicSkillIcon('unity', 'unity', false)}
        ${dynamicSkillIcon('csharp')} ${dynamicSkillIcon('html', 'html5')}
        ${dynamicSkillIcon('css', 'css3')}
        ${dynamicSkillIcon('js', 'javascript')} ${dynamicSkillIcon('nodejs')}
        ${dynamicSkillIcon('php')} ${dynamicSkillIcon('mysql')}
        ${dynamicSkillIcon('python')}
        ${dynamicSkillIcon('tensorflow', 'tensorflow', false)}
    </article>
`

const dynamicSkillIcon = (
    skillName,
    iconName = skillName,
    plain = true
) => html`
    <figure
        class=${`vertical home-skill-bubble ${skillName}`}
        onclick=${clickedIcon(iconsProjects[skillName])}
    >
        <i class=${`devicon-${iconName}-${plain ? 'plain' : 'original'}`}></i>
    </figure>
`
