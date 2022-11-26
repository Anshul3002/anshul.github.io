const button1 = document.getElementById('send')
const name = document.getElementById("name");
const email = document.getElementById('email')
const message = document.getElementById('message-text')
const ws = new WebSocket("ws://localhost:8020");
const function1 = () => {
        let username = name.value
        let useremail = email.value
        let usermessage = message.value
        ws.send(`{username: "${username}", useremail: "${useremail}", usermessage: "${usermessage}"},null `);
    }
ws.addEventListener("open", () => {
    button1.addEventListener("click", function1)
})