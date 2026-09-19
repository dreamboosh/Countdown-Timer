// BST (UTC+1)
const targetDate = new Date("2027-01-01T00:00:00Z").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secsEl = document.getElementById("seconds");
const timerGrid = document.getElementById("timer");
const expiredMsg = document.getElementById("expired-msg");

function format(value) {
  return String(value).padStart(2, "0");
}

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(timerInterval);
    timerGrid.style.display = "none";
    expiredMsg.style.display = "block";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent = format(days);
  hoursEl.textContent = format(hours);
  minsEl.textContent = format(minutes);
  secsEl.textContent = format(seconds);
}

updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);
