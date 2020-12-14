var time_remaining = 0;
var show_time = document.querySelector(".timer");
var questions = [
    ["Q1 This is where the question will go",
        ["answr 1", true], ["answr 2", false], ["answr 3", false], ["answr 4", false]],
    ["Q2 This is where the question will go",
        ["answr 1", true], ["answr 2", false], ["answr 3", false], ["answr 4", false]],
    ["Q3 This is where the question will go",
        ["answr 1", true], ["answr 2", false], ["answr 3", false], ["answr 4", false]],
    ["Q4 This is where the question will go",
        ["answr 1", true], ["answr 2", false], ["answr 3", false], ["answr 4", false]],
    ["Q5 This is where the question will go",
        ["answr 1", true], ["answr 2", false], ["answr 3", false], ["answr 4", false]],

]


//still need loads of vars!  Probs need vars of divs to toggle displays

//----------------------------------------------------------------------------------



//In question box, show questions[Q Index][0]
//In possible answers, show quesions[Same index][1-4][0] use for loop!
//when they click, have it ref questions[Same index][chosen index][2] to det true/false
// ^store click as a event.target maybe? don't want to do an if for each index (maybe do it to start though!)

    
// declare functions logically (chronological)! Will help visualize

function start_page(){
    var placeholder=0;
    placeholder++;
}

//------------------------------------------------------------------
//Personalize to my project

// function display_toggler(x) {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//------------------------------------------------------------------

function time_start() {
    time_remaining = 76;        //bc first action in interval is --, fisrt number shown is 75, and properly shows 1 instead of cutting off
    timer();
}

function timer() {
    var time_left = setInterval(function () {
        time_remaining--;
        show_time.textContent = "Timer: " + time_remaining;
        if (time_remaining <= 0) {
            show_time.textContent = "Timer:__ ";
            clearInterval(time_left);
        }
    }, 1000)
}

function question_changer(){
    var placeholder=0;
    placeholder++;
}

function answr_eval(){
    var placeholder=0;
    placeholder++;
}


time_start();