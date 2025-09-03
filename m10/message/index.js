const wsUri = "wss://echo.websocket.org/";

let form;
let inputMessage;
let output;
let geoButton;

document.addEventListener("DOMContentLoaded", () => {
  form = document.querySelector("#chatForm");
  inputMessage = form.querySelector("input");
  output = document.querySelector(".container-messages");
  geoButton = document.getElementById("geoButton");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = inputMessage.value.trim();
    if (message) {
      sendToChat("Вы: " + message, "userMessage");
      websocket.send(message);
      inputMessage.value = "";
    }
  });

  // Кнопка геолокации
  geoButton.addEventListener('click', () => {
    const existingLink = document.getElementById("geoLoc");
    if (existingLink) existingLink.remove();

    if (!navigator.geolocation) {
      console.log('Geolocation не поддерживается вашим браузером');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  });
});


function writeToConsole(message) {
  console.log(message);
}

function sendToChat(messageChat, nameId) {
  let sms = document.createElement("p");
  sms.id = nameId;
  sms.textContent = messageChat;
  output.appendChild(sms);
}


let websocket = new WebSocket(wsUri);

websocket.onopen = () => writeToConsole("Пользователь подключен");
websocket.onmessage = (evt) => sendToChat("Сервер: " + evt.data, "serverMessage");

// Геолокация
function success(position) {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  let link = document.createElement("a");
  link.id = "geoLoc";
  link.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  link.textContent = 'Ссылка на карту';
  output.appendChild(link);
}

function error() {
  console.log("Невозможно получить геолокацию");
}
