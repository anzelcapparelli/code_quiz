// var h1El = document.createElement("h1");
// document.body.appendChild(h1El);

// h1El.textContent="Test";

var time_remaining = 0;


var divEl=document.createElement("div");
var show_time = document.querySelector(".timer");
show_time.appendChild(divEl);

function timer() {
    var time_left = setInterval(function () {
        divEl.textContent = time_remaining;
        time_remaining--;
        if (time_left <= 0) {
            clearInterval(time_left);
        }
    }, 1000)
}

function time_start() {
    time_remaining = 75;
    timer();
}

time_start;