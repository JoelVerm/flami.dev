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
            padding: 5px;
            margin: 5px;
            border-radius: 1000vw;
            background: linear-gradient(90deg, var(--color-main-1), var(--color-main-2)) fixed;
            transition: margin 0.2s;
        }
        .home-skills > figure:nth-of-type(1n) {
            animation: var(--blob1);
        }
        .home-skills > figure:nth-of-type(2n) {
            animation: var(--blob2);
        }
        .home-skills > figure:nth-of-type(3n) {
            animation: var(--blob3);
        }
        .home-skills > figure:nth-of-type(4n) {
            animation: var(--blob4);
        }
        .home-skills > figure:nth-of-type(5n) {
            animation: var(--blob5);
        }
        .home-skills > figure i {
            font-size: 3em;
            line-height: 70px;
            transition: rotate 0.2s;
        }
        .home-skills > figure:hover {
            margin-top: -5px;
        }
        .home-skills > figure:hover i {
            rotate: 10deg;
        }
        .home-skills > figure .devicon-unity-original {
            padding-right: 8px;
            transition: rotate 0.2s, padding 0.2s ease;
        }
    `}
    </style>
    <article class="horizontal home-skills">
        ${dynamicSkillIcon('godot')} ${dynamicSkillIcon('html', 'html5')}
        ${dynamicSkillIcon('css', 'css3')}
        ${dynamicSkillIcon('js', 'javascript')} ${dynamicSkillIcon('python')}
        ${dynamicSkillIcon('tensorflow', 'tensorflow', false)}
    </article>
`

const dynamicSkillIcon = (
    skillName,
    iconName = skillName,
    plain = true
) => html`
    <figure class=${`vertical home-skill-bubble ${skillName}`}>
        <i class=${`devicon-${iconName}-${plain ? 'plain' : 'original'}`}></i>
    </figure>
`
