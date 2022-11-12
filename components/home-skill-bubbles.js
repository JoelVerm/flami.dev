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
let iconsOffsetsX = []
let iconsOffsetsY = []
/**
 *
 * @param {icons} icon
 */
function clickedIcon(icon) {
	let projectName = icon.projects[0]
	let i = 0
	for (const name in icons) {
		if (!icons[name].projects.includes(projectName)) continue
		if (!iconsOffsetsX[i] && !iconsOffsetsY[i]) {
			let iconElement = document.querySelector(
				`.home-skill-bubble.${name}`
			)
			var parentRect = iconElement.offsetParent.getBoundingClientRect()
			iconsOffsetsY[i] =
				parentRect.top +
				iconElement.offsetTop +
				(5 - (iconElement.offsetTop % 90))
			iconsOffsetsX[i] = parentRect.left + iconElement.offsetLeft
		}
		icons[name].hasShowingIndex = i++
	}
	console.log(iconsOffsetsX, iconsOffsetsY)
	if (i !== 0) activate(1)()
}

export const page = () => {
	if (activePage !== 1) {
		for (const name in icons) {
			icons[name].hasShowingIndex = -1
			iconsOffsetsX = []
			iconsOffsetsY = []
		}
	}
	return html`
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

            .home-skills > figure:not([data-showing-index="-1"]) {
                top: calc(0px - var(--top-offset) + max(10vh, 50px) - 15px);
                left: calc(100vw - var(--left-offset) + max(10vw, 50px) - 15px + 50px * var(--data-showing-index));
                width: 50px;
                height: 50px;
                margin: 20px;
                font-size: 0.6em;
            }
            .home-skills > figure:not([data-showing-index="-1"]) i {
                line-height: 40px;
            }
            .home-skills > figure:not([data-showing-index="-1"]) .devicon-unity-original {
                padding-right: 4px;
            }
        `}
		</style>
		<article class="horizontal home-skills">
			${dynamicSkillIcon('godot')}
			${dynamicSkillIcon('unity', 'unity', false)}
			${dynamicSkillIcon('csharp')} ${dynamicSkillIcon('html', 'html5')}
			${dynamicSkillIcon('css', 'css3')}
			${dynamicSkillIcon('js', 'javascript')}
			${dynamicSkillIcon('nodejs')} ${dynamicSkillIcon('php')}
			${dynamicSkillIcon('mysql')} ${dynamicSkillIcon('python')}
			${dynamicSkillIcon('tensorflow', 'tensorflow', false)}
		</article>
	`
}

const dynamicSkillIcon = (
	skillName,
	iconName = skillName,
	plain = true
) => html`
	<figure
		class=${`vertical home-skill-bubble ${skillName}`}
		onclick=${() => clickedIcon(icons[skillName])}
		data-showing-index=${icons[skillName].hasShowingIndex}
		style=${`--top-offset: ${Math.floor(
			iconsOffsetsY[icons[skillName].hasShowingIndex]
		)}px; --left-offset: ${Math.floor(
			iconsOffsetsX[icons[skillName].hasShowingIndex]
		)}px; --data-showing-index: ${icons[skillName].hasShowingIndex};`}
	>
		<i class=${`devicon-${iconName}-${plain ? 'plain' : 'original'}`}></i>
	</figure>
`
