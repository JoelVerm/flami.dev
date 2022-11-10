import { activate, activePage } from './navbar.js'

/**
 * @enum {{string: {projects: string[], hasShowingIndex: number}}}
 */
const icons = {
	godot: {
		projects: ['Odweens'],
		hasShowingIndex: -1
	},
	unity: {
		projects: ['Odweens unity'],
		hasShowingIndex: -1
	},
	csharp: {
		projects: ['Odweens unity'],
		hasShowingIndex: -1
	},
	html: {
		projects: ['flami.dev'],
		hasShowingIndex: -1
	},
	css: {
		projects: ['flami.dev'],
		hasShowingIndex: -1
	},
	js: {
		projects: ['flami.dev'],
		hasShowingIndex: -1
	},
	nodejs: {
		projects: ['flami.dev'],
		hasShowingIndex: -1
	},
	php: {
		projects: [],
		hasShowingIndex: -1
	},
	mysql: {
		projects: [],
		hasShowingIndex: -1
	},
	python: {
		projects: ['chessJ'],
		hasShowingIndex: -1
	},
	tensorflow: {
		projects: ['chessJ'],
		hasShowingIndex: -1
	}
}
let iconsOffsetX = 0
let iconsOffsetY = 0
/**
 *
 * @param {icons} icon
 */
function clickedIcon(icon) {
	let projectName = icon.projects[0]
	let i = 0
	for (const name in icons) {
		if (!icons[name].projects.includes(projectName)) continue
		if (i === 0) {
			let iconElement = document.querySelector(
				`.home-skill-bubble.${name}`
			)
			let rect = iconElement.getBoundingClientRect()
			iconsOffsetY = rect.top
			iconsOffsetX = rect.left
			console.log(rect)
		}
		icons[name].hasShowingIndex = i++
	}
	if (i !== 0) activate(1)()
}

export const page = () => {
	if (activePage !== 1) {
		for (const name in icons) {
			icons[name].hasShowingIndex = -1
		}
	}
	return html`
		<style>
			${`
            .home-skills {
                position: relative;
                flex-wrap: wrap;
            }
            .home-skills div {
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
                transition: margin 0.2s, top 0.5s ease, left 0.5s ease, width 0.5s ease, height 0.5s ease, font-size 0.5s ease;
            }
            .home-skills div i {
                font-size: 3em;
                line-height: 70px;
                transition: rotate 0.2s, line-height 0.5s ease;
            }
            .home-skills div:hover {
                margin-top: -5px;
            }
            .home-skills div:hover i {
                rotate: 10deg;
            }
            .home-skills div .devicon-unity-original {
                padding-right: 8px;
                transition: padding 0.5s ease;
            }

            .home-skills div:not([data-showing-index="-1"]) {
                --top-offset: ${-iconsOffsetY}px;
                --left-offset: ${-iconsOffsetX}px;
                top: calc(var(--top-offset) + max(10vh, 50px));
                left: calc(100vw + var(--left-offset) + max(10vw, 50px));
                width: 50px;
                height: 50px;
                font-size: 0.6em;
            }
            .home-skills div:not([data-showing-index="-1"]) i {
                line-height: 40px;
            }
            .home-skills div:not([data-showing-index="-1"]) .devicon-unity-original {
                padding-right: 4px;
            }
        `}
		</style>
		<div class="horizontal home-skills">
			${dynamicSkillIcon('godot')}
			${dynamicSkillIcon('unity', 'unity', false)}
			${dynamicSkillIcon('csharp')} ${dynamicSkillIcon('html', 'html5')}
			${dynamicSkillIcon('css', 'css3')}
			${dynamicSkillIcon('js', 'javascript')}
			${dynamicSkillIcon('nodejs')} ${dynamicSkillIcon('php')}
			${dynamicSkillIcon('mysql')} ${dynamicSkillIcon('python')}
			${dynamicSkillIcon('tensorflow', 'tensorflow', false)}
		</div>
	`
}

const dynamicSkillIcon = (
	skillName,
	iconName = skillName,
	plain = true
) => html`
	<div
		class=${`vertical home-skill-bubble ${skillName}`}
		onclick=${() => clickedIcon(icons[skillName])}
		data-showing-index=${icons[skillName].hasShowingIndex}
	>
		<i class=${`devicon-${iconName}-${plain ? 'plain' : 'original'}`}></i>
	</div>
`
