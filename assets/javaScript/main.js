// first I will want to create the timer and I want it to count down from 2:00
// I need to make that timer with an interval timmer set to count down every second
// I will also need to make it so answers are being checked on correctness and the right/wrong % is displayed
// I will need to research some form commands to figure out how to do that.
// I want The right/wrong to pop up at the end in a modle. With a gif possibly? 
window.onload = function () {
    $(".btn").on('click', stopwatch.start);

};
var intervalId;
var clockRunning = false;
var stopwatch = {
    time: 60,



    start: function () {

        if (!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
        }
    },

    count: function () {
        stopwatch.time--;

        if (stopwatch.time === -1) {
            clearInterval(intervalId);
            clockRunning = false;
            $('.correct').html('<p><h6> This is your score! ' + rightNum + '/6</h6></p>');
            $('.answer').css('background-color', 'orangered');
        } else {

            var converted = stopwatch.timeConverter(stopwatch.time);
            console.log(converted);

            $('#timer').html('<h1>' + converted + '</h1>');
        }

    },

    timeConverter: function (t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = '00'
        } else if (minutes < 10) {
            munites = '0' + minutes;
        }

        return minutes + ':' + seconds;


    }




};





var rightNum = 0;

$('.answer').on('click', function () {
    rightNum++;
    console.log(rightNum);
});

$('.wrong').on('click', function () {

});