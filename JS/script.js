function countdown(targetDate) {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (timeLeft < 0) {
        clearInterval(intervalId);
        document.querySelector('.coming-soon').innerHTML = "<h1>We're Live!</h1><p>Thank you for waiting.</p>";
    }
}

const targetDate = new Date('2024-06-01T00:00:00').getTime(); // Change this date as needed
const intervalId = setInterval(() => countdown(targetDate), 1000);
