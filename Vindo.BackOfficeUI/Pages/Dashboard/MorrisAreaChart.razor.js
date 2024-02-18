export function morrisAreaChartWidget(chartElement, data, xKey) {

	// Get the first record
	const firstRecord = data[0];

	// Get the keys of the first record
	const keys = Object.keys(firstRecord);


	// Get the keys of the first record except 'y'
	const otherKeys = keys.filter(key => key !== xKey);

	const lineColors = otherKeys.map(getRandomColor);
	
	// area chart
	Morris.Area({
		element: chartElement,
		data: data,
		lineColors: lineColors,
		xkey: xKey,
		ykeys: otherKeys,
		labels: otherKeys,
		pointSize: 2,
		padding: 0,
		lineWidth: 2,
		resize: true,
		fillOpacity: 0.1,
		behaveLikeLine: true,
		gridLineColor: getRandomColor(),
		hideHover: 'auto',
		axes: false,

	});
}

function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}