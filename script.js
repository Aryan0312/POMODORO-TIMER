let seconds =0;
let timerId = null;
let click = false;
let mins = 0;
function updateTimerDisplay() {
    let displayMins = mins < 10 ? "0" + mins : mins;
    let displaySecs = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer").innerHTML = displayMins + " : " + displaySecs;
}
updateTimerDisplay();
document.getElementById("increaseBtn").onclick =  ()=>{
    mins+=25;
    seconds=0;
    updateTimerDisplay();

};

document.getElementById("breakBtn").onclick =  ()=>{
    mins=5;
    seconds=0;
    updateTimerDisplay();

};
document.getElementById("resetBtn").onclick =  ()=>{
    mins=0;
    seconds=0;
    updateTimerDisplay();

};

document.getElementById("start").onclick =  ()=>{
   
    click = !click;
    
    console.log(click);
    
    if(click==true){
             timerId = setInterval(secondsFunction,1000);
             document.getElementById("start").textContent = "STOP";
    }else{
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
            alert("⏰ Time's up! Take a break, boss!");
        }
    }

    
    updateTimerDisplay();
    
};