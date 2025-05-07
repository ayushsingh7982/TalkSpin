const socket = io();

const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const messages = document.getElementById("messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

socket.on("chat message", (msg) => {
    const item = document.createElement("li");
    item.textContent = msg;
    // Optionally style sent messages differently (add `self` class if you track sender)
    item.classList.add("self"); // Remove if you want all messages same
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
  });
  