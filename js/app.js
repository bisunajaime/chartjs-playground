var ctx = document.getElementById('myChart').getContext('2d');
var barData1, addData, alertMsg, set, newSet, inpData, delData, randData, color, months
barData1 = document.getElementById('barData1');
addData = document.querySelector('#addData');
//alertMsg = document.getElementById('alertMsg');
inpData = document.getElementById('inpData');
delData = document.getElementById('delData');
randData = document.getElementById('randData');
chartType = document.getElementById('chartType');
form = document.getElementById('changeType');

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
color = ["#1abc9c", "#2ecc71", "#27ae60", "#3498db", "#2980b9", "#9b59b6", "#8e44ad", "#f1c40f", "#e67e22", "#e74c3c", "#f39c12", "#c0392b"];
set = [];

var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: [],
        datasets: [{
            label: [],
            data: set,
            backgroundColor: getColor(),
            borderColor: getColor(),
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
    return Math.floor(Math.random() * (max - min) + min);
}

function getMonths(){
    var monthsArr = [];
    for (let i = 0; i < months.length; i++) {
        monthsArr.push(months);
    }
    return monthsArr;
}

var i = 0;
addData.addEventListener('click', function () {
    var rand = generateRandNum(0, 100);
    if(set.length < 12){
        set.push(Math.floor(rand));
        myChart.data.datasets[0].data = set;
        for (let i = 0; i < set.length; i++) {
            myChart.data.datasets[0].backgroundColor[i] = getColor();
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

randData.addEventListener('click', function(){
    for (let i = 0; i < set.length; i++) {
        set[i] = (Math.floor(generateRandNum(0, 100)));
        var col = getColor()[i] = `rgb(${generateRandNum(50,255)}, ${generateRandNum(50,255)}, ${generateRandNum(50,255)})`;
        myChart.data.datasets[0].backgroundColor[i] = col;
        
    }
    myChart.data.datasets[0].data = set;
    myChart.update();
});
color = [];
function getColor() {
    
    for (let i = 0; i < set.length; i++) {
        color.push(`rgb(${generateRandNum(50,255)}, ${generateRandNum(50,255)}, ${generateRandNum(50,255)})`);
    }
    return color;
}