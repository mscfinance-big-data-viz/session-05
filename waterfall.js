var data = [
    { name: '2021',
     type: 'waterfall',
     orientation: 'v',
     x: ['Sales',
         'Other revenues',
         'Total revenues',
         'Operating expenses',
         'Other expenses',
         'EBITDA'],
    y: [60, 80,0,-40,-20,0],
    measure: ['relative',
              'relative',
              'total',
              'relative',
              'relative',
              'total'],
     text: ['+60', '+80','','-40','-20','EBITDA'],
     textposition: 'outside',
     connector: { line: { color: 'rgb(28,134,34)'}}
    }];

var layout = { title: 'PnL 2021',
              xaxis: {type : 'category'},
              yaxis: {type: 'linear'}};

Plotly.newPlot('viz', data, layout);