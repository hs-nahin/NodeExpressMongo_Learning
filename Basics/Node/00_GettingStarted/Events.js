const EventEmitter = require("events");
const Message = require("./message");

const emitter = new EventEmitter();

console.log('Before');

// At first I must have to register a listener before emitting an event
// Register a listener
emitter.on("messageLogged", (parameterOfMessage) => {
  console.log(`Listener called with parameter: ${parameterOfMessage.number} and ${parameterOfMessage.text}`);
});

// Emit an event
emitter.emit("messageLogged", {
  number: 1,
  text: "From EventEmitter"
});


// ----------------------------

// Create an instance of the class
const message = new Message();

// Register a listener: {destructuring the parameter}
message.on("messageClass", ({number, text}) => {
    console.log(`Listener called with parameter: ${number} and ${text}`);
});

// Call the method of the class
message.startMessage();
// ----------------------------


// I can now emit an event, but I must have to register a listener before emitting an event
// emitter.emit("messageLogged"); // If I comment out this line, the listener will not be called

console.log('After');