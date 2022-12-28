const process = require('process');
const child_process = require('child_process');

console.log(`Процесс ${__filename} запущен`);

let multiplicator = child_process.fork('multiplicator');
let summator = child_process.fork('summator');

process.on('beforeExit', (code) => {
   console.log(`Событие beforeExit процесса ${__filename} с кодом ${code}`);
});
process.on('exit', (code) => {
   console.log(`Событие exit процесса ${__filename} с кодом ${code}`);
});
summator.on('message', message => {
    console.log(message);
    summator.disconnect();
});
multiplicator.on('message', message => {
    console.log(message);
    multiplicator.disconnect();
});

summator.send('11+17');
multiplicator.send('8*-10');



