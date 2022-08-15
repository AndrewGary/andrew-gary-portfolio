import AdamGaryGlassImage from '../images/AdamGaryGlass.png';
import SliderPuzzleImage from '../images/SliderPuzzle.png';
import CoderHeroesImage from '../images/CoderHeroes.png';

export const projects = [
	{
		name: "Adam Gary Glass",
		description: "This is an e-commerce website I'm building for a friend who is a glassblower. He has been running his business doing direct to customer sales through Social Media so I figured I would build him a website to help automate things.",
		techUsed: ['React.js', 'TailwindCSS', 'Node.js', 'Express', 'Auth0', 'Cloudinary for Media'],
		image: AdamGaryGlassImage,
        siteLink: 'https://adamgaryglass.herokuapp.com',
        gitHubLink: 'https://github.com/AndrewGary/adam-gary-glass'
	},
	{
		name: "Slider Puzzle",
		description: "This is a puzzle game I have always wanted to replicate because there is so much room for different features and it's pretty fun.",
		techUsed: ['React.js', 'TailwindCSS'],
		image: SliderPuzzleImage,
        siteLink: 'https://slider-puzzle-001.herokuapp.com',
        gitHubLink: 'https://github.com/AndrewGary/slider-puzzle'
	},
	{
		name: "Coder Heroes",
		description: "",
		techUsed: ['React.js', 'Node.js', 'Express', 'Ant Design', 'Redux', 'Okta', 'Less', 'Docker'],
		image: CoderHeroesImage,
        siteLink: 'https://a.coderheroes.dev',
        gitHubLink: 'https://github.com/BloomTech-Labs/coder-heroes-fe'
	},
];