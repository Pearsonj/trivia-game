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
    time: 30,



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
            $('.answer1').show();
            $('.wrong1').show();
            $('.answer2').show();
            $('.wrong2').show();
            $('.answer3').show();
            $('.wrong3').show();
            $('.answer4').show();
            $('.wrong4').show();
            $('.answer5').show();
            $('.wrong5').show();
            $('.answer6').show();
            $('.wrong6').show();
            $('.answer1').css('background-color', 'orangered');
            $('.answer2').css('background-color', 'orangered');
            $('.answer3').css('background-color', 'orangered');
            $('.answer4').css('background-color', 'orangered');
            $('.answer5').css('background-color', 'orangered');
            $('.answer6').css('background-color', 'orangered');

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
            minutes = ''
        } else if (minutes < 10) {
            munites = minutes;
        }

        return minutes + '' + seconds;


    }




};

var rightNum = 0;


$('.answer1').on('click', function () {
    rightNum++;
    $('.wrong1').hide();
    $('.answer1').hide();
    console.log(rightNum);
});

$('.answer2').on('click', function () {
    rightNum++;
    $('.wrong2').hide();
    $('.answer2').hide();
    console.log(rightNum);
});

$('.answer3').on('click', function () {
    rightNum++;
    $('.wrong3').hide();
    $('.answer3').hide();
    console.log(rightNum);
});

$('.answer4').on('click', function () {
    rightNum++;
    $('.wrong4').hide();
    $('.answer4').hide();
    console.log(rightNum);
});

$('.answer5').on('click', function () {
    rightNum++;
    $('.wrong5').hide();
    $('.answer5').hide();
    console.log(rightNum);
});

$('.answer6').on('click', function () {
    rightNum++;
    $('.wrong6').hide();
    $('.answer6').hide();
    console.log(rightNum);
});

$('.wrong1').on('click', function () {
    $('.answer1').hide();
    $('.wrong1').hide();
});

$('.wrong2').on('click', function () {
    $('.wrong2').hide();
    $('.answer2').hide();
});

$('.wrong3').on('click', function () {
    $('.wrong3').hide();
    $('.answer3').hide();
});

$('.wrong4').on('click', function () {
    $('.wrong4').hide();
    $('.answer4').hide();
});

$('.wrong5').on('click', function () {
    $('.wrong5').hide();
    $('.answer5').hide();
});

$('.wrong6').on('click', function () {
    $('.wrong6').hide();
    $('.answer6').hide();
});