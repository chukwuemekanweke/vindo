// dashboardFunctions.js

function initializeDashboardCharts() {

	'use strict';


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
	



}
