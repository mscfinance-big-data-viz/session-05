var trace1= {
    x: [3, 6, 11],
    y: [0.2, 4.3, 6],
    text: ['Stock 1 <br> Market cap: 140', 'Stock 2 <br> Market cap: 80', 'Stock C<br> Market cap: 100'],
    mode: 'markers',
    marker: {
            color: ['rgb(28,146,46)', 'rgb(229,53,12)', 'rgb(75,100,180)'],
                size: [140,80,100]
            }
            };

var data = [trace1];

var layout = { title: 'Risk, Return and Market Cap'};

Plotly.newPlot('viz', data, layout);