const { EventEmitter } = require("events");
class MyEventEmitter extends EventEmitter {
    emitObject(obj = {}) {
        this.contato = obj;
    }
}
module.exports = new MyEventEmitter();
