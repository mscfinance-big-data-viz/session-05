Plotly.d3.csv('https://raw.githubusercontent.com/msc-fmt-viz/session-02/main/BTC-USD.csv', (err, rows) => {
    
    function unpack (rows, key){
        return rows.map(function(row) {
            return row[key];
        });
    }
    
    var trace = {
        x: unpack(rows, 'Date'),
        close: unpack(rows, 'Close'),
        high: unpack(rows, 'High'),
        low: unpack(rows, 'Low'),
        open: unpack(rows, 'Open'),
        
        increasing: {line: {color: 'blue'}},
        decreasing: {line: {color: 'red'}},
        
        type: 'candlestick',
        xaxis: 'x',
        yaxis: 'y'};
    
    var data=[trace];
    
    var layout = { title: 'Bitcoin price',
                 dragmode: 'zoom',
                 showlegend: 'false',
                 xaxis: {
                     autorange: true,
                     title: 'Date',
                     rangeselector: {
                         x: 0,
                         y: 1.2,
                         xanchor: 'left',
                         buttons: [{
                             step: 'months',
                             stepmode: 'backward',
                             count: 1,
                             label: '1 month'},
                                   {
                             step: 'months',
                             stepmode: 'backward',
                             count: 3,
                             label: '3 months'},
                                   {
                             step: 'months',
                             stepmode: 'backward',
                             count: 12,
                             label: '12 months'},
                                   {
                              step:'all',
                              label: 'All Dates'}]}},
                  yaxis: {autorange: true,
                         type: 'linear'}
                                   
                                   
                  
                 };
    
    Plotly.newPlot('viz', data, layout); });
    