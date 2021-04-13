const strike= () =>{
    let input = document.getElementById('inputStroke').value;
    let list = ["Hole-in-One!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
const golfStrike = (par,stroke) =>{
    return (stroke ==1)?
        document.getElementById("result").innerHTML = list[0]:
    (stroke<=par-2)?
        document.getElementById("result").innerHTML = list[1]:
    (stroke == par -1)?
        document.getElementById("result").innerHTML = list[2]:
    (stroke == par)?
        document.getElementById("result").innerHTML = list[3]:
    (stroke == par+1)?
        document.getElementById("result").innerHTML = list[4]:
    (stroke == par+2)?
        document.getElementById("result").innerHTML = list[5]:
        document.getElementById("result").innerHTML = list[6];
    }
    outcome= golfStrike(4,input);
    document.querySelector("result").textContent = outcome;
}
function erase(clear) {
    document.querySelector("#result").textContent = " ";
}