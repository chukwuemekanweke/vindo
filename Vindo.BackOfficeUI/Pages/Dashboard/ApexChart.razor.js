export function apexChartWidget(element, series, xAxis) {

	const tooltips = series.map(row => {
		let formatter = val => val.toString();		
		return {
			title: {
				formatter: formatter
			}
		};
	});

	const randomColors = series.map(() => getRandomColor());


	var options = {
		chart: {
			height: 310,
			type: 'line',
			zoom: {
				enabled: false
			},
			foreColor: "#8a99b5",
		},
		dataLabels: {
			enabled: false
		},
		colors: randomColors,
		stroke: {
			width: [5, 7, 5],
			curve: 'smooth',
			dashArray: [0, 8, 5]
		},
		series: series,
		markers: {
			size: 0,

			hover: {
				sizeOffset: 6
			}
		},
		xaxis: {
			categories: xAxis,
		},
		tooltip: {
			y: tooltips
		},
		grid: {
			borderColor: '#f1f1f1',
		}
	}

	var chart = new ApexCharts(
		document.querySelector(element),
		options
	);

	chart.render();
}


function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}