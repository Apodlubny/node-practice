/* добавляем web socet через new 
и создаем ws сервер через new*/
const ws = new require("ws");

const wsServer = new ws.Server({ port: 5000 });
/* вешаем на вебсокет обработчик событий on и передаем ему два аргумента: название события(в нашем случае connection) и коллбек функцию которая срабатывает при этом событии
далее делаем логику во фронтенд части*/
/* для возможности обмена сообщениями создается внешний массив */
const clients = [];
wsServer.on("connection", (newClient) => {
  console.log("New frontend connection");
  clients.push(newClient);
  // для того чтобы сообщить всем о новом пользователе используем метод перебора forEach;
  clients.forEach((client) => {
    if (client !== newClient) {
      client.send("Welcome a new user!");
    }
  });
});
