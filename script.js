function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
        
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
var message = "Good evening";

if (h >= 12 && h <= 13) {
    message = "Have a nice launch";
}
if (h >= 14 && h <= 19) {
    message = "Good afternoon";
}
if (h >= 20 && h <= 0) {
    message = "Good evening";
}
if (h >= 1 && h <= 2) {
    message = "Sleep well";
}
if (h >= 3 && h <= 11) {
    message = "Good morning";
}

    var time = h + ":" + m + ":" + s;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    document.getElementById("Message").innerText = message + ", Vladan";
    document.getElementById("Message").textContent = message + ", Vladan";
    
    setTimeout(showTime, 1000);
    
}

showTime();