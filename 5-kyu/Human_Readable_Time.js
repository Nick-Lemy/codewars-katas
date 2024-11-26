function humanReadable(sec) {
    var hours = 0;
    var minutes = 0;
    var seconds = sec;
    if (seconds >= 60) {
        minutes = Math.floor(seconds / 60)
        seconds = sec - minutes * 60;
        if (minutes >= 60) {
            hours = Math.floor(minutes / 60)
            let test = minutes;
            minutes = test - hours * 60;
        }
    }
    let h = hours < 10 ? ('0' + hours.toString()) : hours;
    let m = minutes < 10 ? ('0' + minutes.toString()) : minutes;
    let s = seconds < 10 ? ('0' + seconds.toString()) : seconds;

    return h + ":" + m + ":" + s
}