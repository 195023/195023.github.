timer = new Array;
count = 0;
document.getElementById("timer-button").onclick = ()=>{
    let output = document.getElementById("timer_input");
    let sec = output.value;
    var message = document.getElementById("warning");
    if(sec === ""){
        message.classList.add("is-active");
        output.value="";
        return false;
    }
    if(sec <= 0){
        message.classList.add("is-active");
        output.value="";
        return false;
    }
    message.classList.remove("is-active");
    nowDate = new Date();
    endDate = new Date(nowDate.getTime() + sec * 1000);
    count = sec;
    document.getElementById("time").textContent = "あと" + sec + "秒です";
    if(timer.length >= 1){
        stopTimer();
    }
    timer.push(setInterval(setTimer,1000));
    output.value="";
};
 
const setTimer = ()=>{
    count--;
    document.getElementById("time").textContent = "あと" + count + "秒です";
    nowDate = new Date();
    if(nowDate.getTime() >= endDate.getTime()){
        document.getElementById("time").textContent = "時間になりました";
        stopTimer();
        document.getElementById("sound").play();
    }
};
const stopTimer = ()=>{
    clearInterval(timer.shift());
}
