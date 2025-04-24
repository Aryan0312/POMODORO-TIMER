let seconds = 0;
let timerId = null;
let click = false;
let mins = 0;
let resetClick = false;
let isBreak = false; // 👈 New flag to check if it’s break time

function updateTimerDisplay() {
    let displayMins = mins < 10 ? "0" + mins : mins;
    let displaySecs = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("timer").innerHTML = displayMins + " : " + displaySecs;
}
updateTimerDisplay();

document.getElementById("increaseBtn").onclick = () => {
    mins += 30;
    seconds = 0;
    resetClick = false;
    isBreak = false; // 👈 Not a break
    updateTimerDisplay();
};

document.getElementById("breakBtn").onclick = () => {
    mins = 5;
    seconds = 0;
    resetClick = false;
    isBreak = true; // 👈 This is a break
    updateTimerDisplay();
};

document.getElementById("resetBtn").onclick = () => {
    clearInterval(timerId); // ⛔ Stop timer if running
    mins = 0;
    seconds = 0;
    click = false; // 🛑 Make sure the start button resets too
    resetClick = true;
    isBreak = false;
    document.getElementById("start").textContent = "START"; // Reset the button text
    updateTimerDisplay();
};


document.getElementById("start").onclick = () => {
    click = !click;

    if (click) {
        if (mins === 0 && seconds === 0) {
            alert("First set the timer, boss! ⏳");
            click = false;
            return;
        }
        resetClick = false;
        timerId = setInterval(secondsFunction, 1000);
        document.getElementById("start").textContent = "STOP";
    } else {
        clearInterval(timerId);
        document.getElementById("start").textContent = "START";
    }
};

let secondsFunction = () => {
    if (seconds > 0) {
        seconds--;
    } else {
        if (mins > 0) {
            mins--;
            seconds = 59;
        } else {
            clearInterval(timerId);
            document.getElementById("start").textContent = "START";
            click = false;
            message(); // 👈 Call message when time’s up
        }
    }
    updateTimerDisplay();
};

let message = () => {
    if (!resetClick) {
        if (isBreak) {
            alert("🛑 Break's done, get back to work boss! 💼");
        } else {
            alert("⏰ Time's up! Take a break, boss!");
        }
    } else {
        alert("First set the timer ⏳");
    }
};
document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "Enter":
            document.getElementById("start").click();
            break;
        case "r":
        case "R":
            document.getElementById("resetBtn").click();
            break;
        case "b":
        case "B":
            document.getElementById("breakBtn").click();
            break;
        case "+":
            document.getElementById("increaseBtn").click();
            break;
    }
});
