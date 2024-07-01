function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    document.getElementById('time').textContent = utcTime;
}

function updateDay() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[now.getUTCDay()];
    document.getElementById('day').textContent = currentDay;
}

window.onload = function() {
    updateTime();
    updateDay();
    setInterval(updateTime, 1000);
}f