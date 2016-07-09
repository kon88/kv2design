$('#two #mySlider').slick({
        dots: true,
        infinite: true,
        fade: true,
         responsive: [
            {
            breakpoint: 1060,
            settings: 
            {arrows: false}
            }
            ]
            
    });

$(function () {
    $('#mySlider .item1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        credits: {enabled: false},
        title: {
            text: 'Internet Users by Region'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Ratio',
            colorByPoint: true,
            data: [{
                name: 'Oceania',
                y: .9
            }, {
                name: 'Africa',
                y: 9.8,
                selected: true
            }, {
                name: 'Europe',
                y: 19,
                selected: true
            }, {
                name: 'North/South America',
                y: 21.8,
                sliced: true,
                selected: true
            }, {
                name: 'Asia',
                y: 48.4,
                selected: true
            }]
        }]
    });
});

$(function () {
    $('#mySlider .item2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Internet Users in the World'
        },
        subtitle: {
            text: 'Source: internetlivestats.com'
        },
        credits: {enabled: false},
        xAxis: {
            categories: [
                '2005',
                '2006',
                '2007',
                '2008',
                '2009',
                '2010',
                '2011',
                '2012',
                '2013',
                '2014',
                '2015',
                '2016'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total (Billions)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Internet Users',
            data: [1.030, 1.163, 1.373, 1.575, 1.766, 2.023, 2.232, 2.495, 2.725, 2.956, 3.186, 3.425]
        }, {name: 'World Population',
            data: [6.520, 6.600, 6.682, 6.764, 6.847, 6.930, 7.013, 7.098, 7.182, 7.266, 7.350, 7.433]
        }]
    });
});

$(function () {
    $('#mySlider .item3').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Top Smartphone OEMs'
        },
        subtitle: {
            text: 'Source: comScore'
        },
        xAxis: {
            categories: ['Apple', 'Samsung', 'LG', 'Motorola', 'HTC'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Share of Smartphone Subscribers (%)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' %'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 120,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '2015',
            data: [42.9, 28.4, 9.9, 5.3, 3.3]
        }]
    });
});

$(function () {
    $('#mySlider .item4').highcharts({
        chart: {
            type: 'column'
        },
        credits: {enabled: false},
        title: {
            text: 'Device Type Daily Average Usage'
        },
        xAxis: {
            categories: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Hours per Day'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'left',
            x: 70,
            verticalAlign: 'top',
            y: 50,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: 'Mobile',
            data: [.3, .35, .4, .8, 1.6, 2.3, 2.6, 2.8]
        }, {
            name: 'Desktop/Laptop',
            data: [2.2, 2.3, 2.4, 2.6, 2.5, 2.3, 2.4, 2.45]
        }, {
            name: 'Other',
            data: [.2, .3, .4, .3, .3, .3, .3, .4]
        }]
    });
});

$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#mySlider .item5').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Data updating every second'
            },
            credits: {enabled: false},
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
            }]
        });
    });
});
