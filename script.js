function sendMessage() {
  const input = document.getElementById("message-input");
  const message = input.value.trim();
  if (message !== "") {
    const chatBox = document.getElementById("chat-messages");
    const newMsg = document.createElement("div");
    newMsg.textContent = message;
    newMsg.style.marginBottom = "10px";
    newMsg.style.background = "#e0e0e0";
    newMsg.style.padding = "5px 10px";
    newMsg.style.borderRadius = "5px";
    newMsg.style.alignSelf = "flex-end";
    chatBox.appendChild(newMsg);
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}