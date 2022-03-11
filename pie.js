var data = [{
    values: [20,10,30,40],
    labels: ['Energy','Tech','Consumer', 'Others'],
    hoverinfo: 'label+percent',
    hole: .4,
    type: 'pie'}];


var layout = { 
    title: 'Sector composition of index',
    showlegend: false,
    height: 600,
    width: 600
                };

Plotly.newPlot('viz', data, layout);