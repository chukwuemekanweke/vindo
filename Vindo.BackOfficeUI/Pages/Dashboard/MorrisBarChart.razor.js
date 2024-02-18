export function morrisBarChartWidget(chartElement, data, xKey, preUnits) {

	// Get the first record
	const firstRecord = data[0];

	// Get the keys of the first record
	const keys = Object.keys(firstRecord);


	// Get the keys of the first record except 'y'
	const otherKeys = keys.filter(key => key !== xKey);

	const barColors = otherKeys.map(getRandomColor);


	Morris.Bar({
		element: chartElement, data: data,
		barGap: 2,
		barSizeRatio: 0.50,
		barShape: 'soft',
		barRadius: [5, 5, 5, 5],
		xkey: xKey,
		ykeys: otherKeys,
		labels: otherKeys,
		barColors: barColors,
		hideHover: 'auto',
		preUnits: preUnits,
		gridLineColor: getRandomColor(),
		gridTextColor: getRandomColor(),
		resize: true,
	}
	);
}

function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}