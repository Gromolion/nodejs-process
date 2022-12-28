const process = require('process');

console.log(`Процесс ${__filename} запущен`);

process.on('beforeExit', (code) => {
    console.log(`Событие beforeExit процесса ${__filename} с кодом ${code}`);
});
process.on('exit', (code) => {
    console.log(`Событие exit процесса ${__filename} с кодом ${code}`);
});

process.on('disconnect', () => {
    console.log(`Событие disconnect процесса ${__filename}`);
});

process.on('message', message => {
    console.log(`${__filename} получил сообщение "${message}"`);
    message = message.split('*');
    process.send(`Ответ от ${__filename}: ${parseInt(message[0]) * parseInt(message[1])}`);
})