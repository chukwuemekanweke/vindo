export function barChartWidget(element, labels, labelColors, data, rotateAxis, showGrid, height = 350) {
    var chartData = prependLabelsToData(labels, data);
    var t = c3.generate({
        bindto: element,
        size: { height: height },
        color: { pattern: labelColors },
        data: {
            columns: chartData,
            type: "bar"
        },
        axis: { rotated: rotateAxis },
        grid: { y: { show: showGrid } }
    });
}

function prependLabelsToData(labels, data) {
    if (!Array.isArray(labels) || !Array.isArray(data)) {
        console.error('Labels and data must be arrays.');
        return;
    }

    if (labels.length !== data.length) {
        console.error('Number of labels must match the number of data sets.');
        return;
    }

    for (let i = 0; i < labels.length; i++) {
        data[i].unshift(labels[i]);
    }

    return data;
}


