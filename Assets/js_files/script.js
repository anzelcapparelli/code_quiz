var time_remaining = 75;
var show_time = document.querySelector(".timer");
var current_question = 0;

var introEl = document.querySelector(".intro_page");
var start_bttnEl = document.querySelector(".start_bttn");
var questionEl = document.querySelector(".questions");
var hi_scoreEl = document.querySelector(".hi_score_input")

//still need loads of vars!  Probs need vars of divs to toggle displays

var q_array = [
    {
        q_text: "This will be the question prompt 1",
        choices: ["choice 1", "choice 2", "choice 3", "choice 4"],
        correct: "choice 1"
    },
    {
        q_text: "This will be the question prompt 2",
        choices: ["choice 1", "choice 2", "choice 3", "choice 4"],
        correct: "choice 2"
    }
]

//----------------------------------------------------------------------------------



// declare functions logically (chronological)! Will help visualize


//------------------------------------------------------------------


function time_start() {
    time_remaining = 76;        //bc first action in interval is --, fisrt number shown is 75, and properly shows 1 instead of cutting off
    timer();
}

function timer() {
    var time_left = setInterval(function () {
        if(hi_scoreEl.style.display==="block"){
            clearInterval(time_left);
        }
        time_remaining--;
        show_time.textContent = "Timer: " + time_remaining;
        if (time_remaining <= 0) {
            show_time.textContent = "Timer: 75 ";
            clearInterval(time_left);
        }
    }, 1000)
}

function question_changer() {

    //    create question box
    //    add question to box

    questionEl.textContent = q_array[current_question].q_text;

    q_array[current_question].choices.forEach(function (item, index) {

        //    Create element button
        //    Append tempButton to button-zone

        var brkEl = document.createElement("p");
        questionEl.appendChild(brkEl);

        var qEl = document.createElement("button");
        brkEl.appendChild(qEl);
        qEl.textContent = item;
        qEl.setAttribute("value", item);

    })

}




start_bttnEl.addEventListener("click", function (event) {
    event.preventDefault();
    introEl.style.display = "none";
    time_start();
    question_changer();
});



//evals if choice is correct, then either changes to next question or to hs
questionEl.addEventListener("click", function (event) {
    event.preventDefault();

    var choice_eval = event.target.value;
    console.log(choice_eval);

    if (choice_eval === (q_array[current_question].correct)) {
        alert("yay!");
        current_question++;

    } else {
        // var wrngEl = document.createElement("div");
        // wrngEl.textContent = "Incorrect";       //setTimeout, say it for a while
        alert("nay!");
        time_remaining -= 15;
        current_question++;

    }

    if (current_question < q_array.length) {
        question_changer();
    } else {
        questionEl.style.display = "none";
        hi_scoreEl.style.display = "block";
    }

});