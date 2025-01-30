const EventEmitter = require("events");

// Without Parameter
class Message extends EventEmitter {
    startMessage() {

        // Emit the 'messageClass' event with a fixed object
        this.emit("messageClass", {
            number: 2,
            text: "From Message class"
        });
    }
}

// With Parameter
// class Message extends EventEmitter {
//     startMessage(message) {
//         console.log(message); // This will log the passed message

//         // Emit the 'messageClass' event with a fixed object
//         this.emit("messageClass", {
//             number: 2,
//             text: "From Message class"
//         });
//     }
// }

module.exports = Message;
