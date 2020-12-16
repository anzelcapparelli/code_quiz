var time_remaining = 5;
var current_question = 0;
var final_score;
var user_input;

var show_time = document.querySelector(".timer");
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
        choices: ["choice 5", "choice 6", "choice 7", "choice 8"],
        correct: "choice 6"
    },
    {
        q_text: "This will be the question prompt 2",
        choices: ["choice 5", "choice 6", "choice 7", "choice 8"],
        correct: "choice 6"
    }

]

//----------------------------------------------------------------------------------



// declare functions logically (chronological)! Will help visualize


//------------------------------------------------------------------


function time_start() {
    timer();
}

function timer() {
    var time_left = setInterval(function () {
        if (hi_scoreEl.style.display === "block") {
            clearInterval(time_left);
        }
        time_remaining--;
        show_time.textContent = "Timer: " + time_remaining;
        if (time_remaining <= 0) {
            final_score = time_remaining;               //intentionally allowing to get negative scores! (it's funny)
            time_remaining = 75;
            show_time.textContent = "Timer: " + time_remaining;       //wanna put high 

            questionEl.style.display = "none";          //changes to hi-score screen
            hi_scoreEl.style.display = "block";         //as soon as timer hits 0
            hi_score_record();

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


function hi_score_record() {
    var pEl = document.createElement("p");
    var pEl2 = document.createElement("p");
    var inputEl = document.createElement("input");
    var divEl = document.createElement("div");
    var submit = document.createElement("button");

    submit.setAttribute("class", "submit_btn");
    inputEl.setAttribute("class", "user_input");



    // var user_input  need to store! probs want to make global

    pEl.textContent = "Your final score is " + final_score;
    hi_scoreEl.appendChild(pEl);

    hi_scoreEl.appendChild(divEl);
    divEl.setAttribute("class", "score_div");

    divEl.appendChild(pEl2);
    pEl2.textContent = "Enter initials:";

    divEl.appendChild(inputEl);

    divEl.appendChild(submit);
    submit.textContent = "Submit";


    var submitEl = document.querySelector(".submit_btn");

    submitEl.addEventListener("click", function var_stor(event) {

        event.preventDefault();
        user_input = document.querySelector(".user_input").value;
        console.log(user_input);
    })
}


//final score stored along with initials! figure out through past activities!
//probs need to make new var for input, then store user and final score as object



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

    if (q_array[current_question].choices.indexOf(event.target.value) === -1) {
        return "";
    }
    //makes sure only button presses are read

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

    question_changer();

});