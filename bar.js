var stock1 = {
                x:['2018','2019','2020'],
                y:[20,10,12],
                type:'bar',
                marker: { color: 'rgb(45,134,190)' }
             };

var stock2 = {
                x:['2018','2019','2020'],
                y:[5,-3,23],
                type:'bar',
                marker: { color: 'rgb(130,13,90)' }
             };

var data =[stock1, stock2];


var layout ={
                title: 'Stock 1 vs Stock 2',
                barmode: 'group'};

Plotly.newPlot('viz', data, layout);



