export function progressBarCircleWidget(element, value) {

	var bar = new ProgressBar.Circle(element, {
		color: getRandomColor(),
		// This has to be the same size as the maximum width to
		// prevent clipping
		strokeWidth: 20,
		trailWidth: 1,
		easing: 'easeInOut',
		duration: 1400,
		text: {
			autoStyleContainer: false
		},
		from: { color: getRandomColor(), width: 1 },
		to: { color: getRandomColor(), width: 5 },
		// Set default step function for all animate calls
		step: function (state, circle) {
			circle.path.setAttribute('stroke', state.color);
			circle.path.setAttribute('stroke-width', state.width);

			if (value === 0) {
				circle.setText('');
			} else {
				circle.setText(value);
			}

		}
	});
	bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	bar.text.style.fontSize = '2rem';

	bar.animate(0.78);
}

function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}