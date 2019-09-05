var ctx = document.getElementById('myChart').getContext('2d');
var barData1, addData, alertMsg, set, inpData, delData, color, months
barData1 = document.getElementById('barData1');
addData = document.querySelector('#addData');
//alertMsg = document.getElementById('alertMsg');
inpData = document.getElementById('inpData');
delData = document.getElementById('delData');

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: [],
        datasets: [{
            label: [],
            data: set,
            backgroundColor: getColor(),
            borderColor: color,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
function generateRandNum(min, max) {
    return Math.random() * (max - min) + min;
}

function getColor(){
    color = ["#1abc9c", "#2ecc71", "#27ae60", "#3498db", "#2980b9", "#9b59b6", "#8e44ad", "#f1c40f", "#e67e22", "#e74c3c", "#f39c12", "#c0392b"];
    var colorArr = []
    for (let i = 0; i < color.length; i++) {
        colorArr.push(color);
    }
    return colorArr;
}

function getMonths(){
    var monthsArr = [];
    for (let i = 0; i < months.length; i++) {
        monthsArr.push(months);
    }
    return monthsArr;
}

set = [];
var i = 0;
addData.addEventListener('click', function () {
    var rand = generateRandNum(0, 100);
    if(set.length < 12){
        set.push(Math.floor(rand));
        myChart.data.datasets[0].data = set;
        for (let i = 0; i < set.length; i++) {
            myChart.data.datasets[0].backgroundColor[i] = color[i];
            myChart.data.datasets[0].borderColor[i] = color[i];
        }
        myChart.data.labels.push(months[i++]);
        myChart.update();
    }else{
        //alertMsg.style.display = "block";
    }
});

delData.addEventListener('click', function(){
    if (i > 0) {
        myChart.data.labels.pop();
        myChart.data.datasets[0].data.pop();
        //alertMsg.style.display = "none"; 
        i--;
        myChart.update();
    }
});
