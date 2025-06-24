const INPUT_PLACEHOLDER = [
	"Go on, I'm listening...",
	"Ask me anything...",
	"What's on your mind?",
	"Ready when you are...",
	"Let's chat...",
];

export const getRandomPlaceholder = () => {
	const randomPlaceholder =
		INPUT_PLACEHOLDER[Math.floor(Math.random() * INPUT_PLACEHOLDER.length)];
	return randomPlaceholder;
};
