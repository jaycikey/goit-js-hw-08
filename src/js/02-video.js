import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.getElementById("vimeo-player");
const player = new Player(iframe);

const LOCAL_STORAGE_KEY = "videoplayer-current-time";

// Функція для збереження поточного часу у локальному сховищі
const saveTimeToLocalStorage = () => {
  player.getCurrentTime().then((seconds) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, seconds);
  });
};

// Функція для встановлення поточного часу відтворення гравця
const setCurrentTime = (time) => {
  player.setCurrentTime(time);
};

// Функція для обробки оновлення часу та збереження у локальному сховищі
const handleTimeUpdate = throttle(() => {
  saveTimeToLocalStorage();
}, 1000);

// Додати слухач події "timeupdate"
player.on("timeupdate", handleTimeUpdate);

// Отримати збережений час з локального сховища та встановити його для гравця
const savedTime = localStorage.getItem(LOCAL_STORAGE_KEY);
if (savedTime) {
  setCurrentTime(savedTime);
}

// Відтворити відео
player.play();