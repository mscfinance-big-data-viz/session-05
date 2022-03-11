var stock1 = {
                x:['2016','2017','2018','2019','2020'],
                y:[5, -3,20,10,12],
                mode: 'lines+markers',
                name:'Stock 1',
                line:{ color: 'rgb(45,134,190)',
                        width: 4,
                        shape: 'spline',
                     dash: 'dot' },
                marker: { color: 'rgb(45,134,190)',
                            size: 12}
             };

var stock2 = {
                x:['2016','2017','2018','2019','2020'],
            y:[6, -1,10,6,21],
                mode: 'lines+markers',
                name:'Stock 2',
                line:{ color: 'rgb(145,14,10)',
                        width: 4,
                        shape: 'spline' },
                marker: { color: 'rgb(145,14,10)',
                            size: 12}
             };

var data =[stock1, stock2];


var layout ={
                title: 'Stock 1 vs Stock 2',
                xaxis: {
                        tickmode: 'array',
                        tickvals: ['2016','2017','2018','2019','2020']
                        }
                };

Plotly.newPlot('viz', data, layout);



