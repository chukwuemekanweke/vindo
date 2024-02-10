// dashboardFunctions.js

function initializeDashboardCharts() {

	'use strict';

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
		colors: ["#ff8f00", '#ee1044', '#389f99'],
		stroke: {
			width: [5, 7, 5],
			curve: 'smooth',
			dashArray: [0, 8, 5]
		},
		series: [{
			name: "In Store",
			data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
		},
		{
			name: "Online",
			data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
		},
		{
			name: 'Total Visits',
			data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
		}
		],
		markers: {
			size: 0,

			hover: {
				sizeOffset: 6
			}
		},
		xaxis: {
			categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
				'10 Jan', '11 Jan', '12 Jan'
			],
		},
		tooltip: {
			y: [{
				title: {
					formatter: function (val) {
						return val + " (Avg)"
					}
				}
			}, {
				title: {
					formatter: function (val) {
						return val + " Avg"
					}
				}
			}, {
				title: {
					formatter: function (val) {
						return val;
					}
				}
			}]
		},
		grid: {
			borderColor: '#f1f1f1',
		}
	}

	var chart = new ApexCharts(
		document.querySelector("#sales-overview"),
		options
	);

	//chart.render();


	// Morris bar chart

	Morris.Bar({
		element: 'morris-bar-chart', data: [
			{ y: 'Blom', a: 10000, b: 8000, c: 7800 },
			{ y: 'BookShow', a: 8500, b: 7000, c: 6500 },
			{ y: 'Farming', a: 9000, b: 7500, c: 7000 },
			{ y: 'Transfer', a: 9500, b: 8500, c: 7500 },
			{ y: 'Trading', a: 7500, b: 5500, c: 5000 },
			{ y: 'Banking', a: 7500, b: 5500, c: 5000 }
		],
		barGap: 2,
		barSizeRatio: 0.50,
		barShape: 'soft',
		barRadius: [5, 5, 5, 5],
		xkey: 'y',
		ykeys: ['a', 'b', 'c'],
		labels: ['Total', 'Used', 'Target'],
		barColors: ['#2444e8', '#843cf7', '#ec4b71'],
		hideHover: 'auto',
		preUnits: "$",
		gridLineColor: '#d2d6e6',
		gridTextColor: '#8997bd',
		resize: true,
	}
	);

	// area chart
	Morris.Area({
		element: 'area-chart3',
		data: [{
			period: '2013',
			data1: 0,
			data2: 0
		}, {
			period: '2014',
			data1: 55,
			data2: 20
		}, {
			period: '2015',
			data1: 25,
			data2: 55
		}, {
			period: '2016',
			data1: 65,
			data2: 17
		}, {
			period: '2017',
			data1: 35,
			data2: 25
		}, {
			period: '2018',
			data1: 30,
			data2: 85
		}, {
			period: '2019',
			data1: 15,
			data2: 15
		}


		],
		lineColors: ['#FDAC41', '#FF5B5C'],
		xkey: 'period',
		ykeys: ['data1', 'data2'],
		labels: ['Data 1', 'Data 2'],
		pointSize: 2,
		padding: 0,
		lineWidth: 2,
		resize: true,
		fillOpacity: 0.1,
		behaveLikeLine: true,
		gridLineColor: '#ffffff0',
		hideHover: 'auto',
		axes: false,

	});




	var bar = new ProgressBar.Circle(progressbar2, {
		color: '#fb3d4e',
		// This has to be the same size as the maximum width to
		// prevent clipping
		strokeWidth: 20,
		trailWidth: 1,
		easing: 'easeInOut',
		duration: 1400,
		text: {
			autoStyleContainer: false
		},
		from: { color: '#5949d6', width: 1 },
		to: { color: '#fb3d4e', width: 5 },
		// Set default step function for all animate calls
		step: function (state, circle) {
			circle.path.setAttribute('stroke', state.color);
			circle.path.setAttribute('stroke-width', state.width);

			var value = Math.round(circle.value() * 110);
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




	var bar = new ProgressBar.Circle(progressbar3, {
		color: '#ea9715',
		// This has to be the same size as the maximum width to
		// prevent clipping
		strokeWidth: 20,
		trailWidth: 1,
		easing: 'easeInOut',
		duration: 1400,
		text: {
			autoStyleContainer: false
		},
		from: { color: '#5949d6', width: 1 },
		to: { color: '#ea9715', width: 5 },
		// Set default step function for all animate calls
		step: function (state, circle) {
			circle.path.setAttribute('stroke', state.color);
			circle.path.setAttribute('stroke-width', state.width);

			var value = Math.round(circle.value() * 90);
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
