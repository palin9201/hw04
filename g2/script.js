Highcharts.chart('container', {

    title: {
        text: '台灣各主要城市平均氣溫',
        align: 'left'
    },

    subtitle: {
        text: '資料來源:中央氣象局',
        align: 'left'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: '資料範圍:30年平均氣溫'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1
        }
    },

    series: [{
        name: '臺北',
        data: [
            16.4,16.9,18.8,22.3,25.6,28.2,29.9,29.5,27.7,24.6,21.9,18.2]

    }, {
        name: '臺中',
        data: [
            17.0,17.7,20.1,23.5,26.4,28.1,28.9,28.4,27.8,25.5,22.6,18.7]
    }, {
        name: '高雄',
        data: [
            19.7,20.7,23.0,25.7,27.8,28.9,29.4,28.9,28.5,26.9,24.5,21.2]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
