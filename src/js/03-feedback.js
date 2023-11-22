import throttle from "lodash.throttle";

const feedbackForm = document.querySelector(".feedback-form");
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');
const LOCAL_STORAGE_KEY = "feedback-form-state";

// Функція для збереження даних у локальному сховищі
const saveDataToLocalStorage = () => {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
};

// Функція для встановлення даних з локального сховища в поля форми
const loadDataFromLocalStorage = () => {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedData) {
    const formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
};

// Відстеження події input на полях форми і збереження даних у локальному сховищі
feedbackForm.addEventListener(
  "input",
  throttle(() => {
    saveDataToLocalStorage();
  }, 500)
);

// Перевірка та заповнення полів форми при завантаженні сторінки
loadDataFromLocalStorage();

// Обробка сабміту форми
feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailValue = emailInput.value.trim();
  const messageValue = messageTextarea.value.trim();
  
  // Перевірка, чи заповнено обидва поля перед відправленням
  if (emailValue === "" || messageValue === "") {
    alert("Будь ласка, заповніть всі поля форми.");
    return; // Не відправляємо дані, якщо не всі поля заповнені
  }
  
  const formData = {
    email: emailValue,
    message: messageValue,
  };
  console.log(formData);
  localStorage.removeItem(LOCAL_STORAGE_KEY); // Очищення локального сховища
  emailInput.value = ""; // Очищення поля email
  messageTextarea.value = ""; // Очищення поля message
});
