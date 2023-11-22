// Імпортуємо необхідні бібліотеки
import Player from "@vimeo/player";
import throttle from "lodash.throttle";

// Отримуємо посилання на iframe відеоплеєра
const iframe = document.getElementById("vimeo-player");

// Створюємо об'єкт відеоплеєра
const player = new Player(iframe);

// Ключ для локального сховища, де буде зберігатися час відтворення
const LOCAL_STORAGE_KEY = "videoplayer-current-time";

// Додаємо слухач події "timeupdate" і використовуємо throttle
// для обмеження зберігання часу в локальному сховищі
player.on("timeupdate", throttle((e) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, e.seconds);
}, 1000));

// Отримуємо збережений час відтворення з локального сховища
const videoStopLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);

// Перевіряємо, чи є збережені дані та чи є вони коректні
const savedTime = parseFloat(videoStopLocalStorage);

// Якщо дані некоректні, встановлюємо час відтворення на 0
if (isNaN(savedTime)) {
  localStorage.setItem(LOCAL_STORAGE_KEY, 0);
} else {
  // Інакше встановлюємо час відтворення зі збережених даних
  player.setCurrentTime(savedTime);
}
