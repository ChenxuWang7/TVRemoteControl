
const pairButton = document.getElementById('pair')
const powerButton = document.getElementById('power');
const sourceButton = document.getElementById('source');
const volUpButton = document.getElementById('vol-up');
const volDownButton = document.getElementById('vol-down');

const sendCommand = command => {
    fetch('endpoint', {method: 'post', body: command});
}

function pair(){
    var msg = prompt("Enter your PIN");
    alert("Paird Successfully." + msg);
    window.alert("paired");
}



const power = () => {
    console.log('power');
    sendCommand('power');
};

const source = () => {
    console.log('source');
    sendCommand('source');
};

const volUp = () => {
    console.log('volUp');
    sendCommand('volUp');
};

const volDown = () => {
    console.log('volDown');
    sendCommand('volDown');
};

pairButton.addEventListener('click', pair);
powerButton.addEventListener('click', power);
sourceButton.addEventListener('click', source);
volUpButton.addEventListener('click', volUp);
volDownButton.addEventListener('click', volDown);




/*
let smartcast = require('vizio-smart-cast');
smartcast.discover(device => {
    console.log(device);
});
console.log('hello, world!');

// Example output:
// {
//     ip: "192.168.0.131",
//     name: "Living Room",
//     manufacturer: "VIZIO",
//     model: "P65-C1"
// }
*/


/*
let smartcast = require('vizio-smart-cast');
let readline = require('readline'); // user input via cmd line
let tv = new smartcast('192.168.20.16');

// configure cmd line input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Initiate a pairing request with a smartcast
tv.pairing.initiate().then(response => {
    // prompt the user for the pin that is displayed on the smartcast device
    rl.question('Enter PIN:', answer => {
        // send the pin to the smartcast device to complete the pairing process
        tv.pairing.pair(answer).then(response => {
            // log the token to be used for future, authenticated requests
            console.log(response.ITEM.AUTH_TOKEN);
        });

        rl.close();
    });
});

*/

/*
let smartcast = require('vizio-smart-cast');
let tv = new smartcast('192.168.20.16', 'Zxv3kuhxh0');

tv.control.volume.down();
*/

