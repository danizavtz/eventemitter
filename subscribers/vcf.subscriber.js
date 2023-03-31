const { events, MyEventEmitter } = require("../");
const validator = require('validator');

MyEventEmitter.on(events.CLEAN_DATA, function () {
    const cleaned_data = validator.blacklist(MyEventEmitter.contato.telefone, ' ()+-');
    MyEventEmitter.contato.telefone = cleaned_data;
});

MyEventEmitter.on(events.INICIO_VCARD, function () {
    MyEventEmitter.emitObject();
});

MyEventEmitter.on(events.NOME, function (nome) {
    MyEventEmitter.contato.nome = nome;
});

MyEventEmitter.on(events.TELEFONE, function (telefone) {
    MyEventEmitter.contato.telefone = telefone;
})

MyEventEmitter.on(events.GRAVAR, function() {
    //rotina para gravar no banco de dados
});

MyEventEmitter.on(events.FIM_VCARD, function() {
    delete MyEventEmitter.contato.nome;
    delete MyEventEmitter.contato.telefone;
});

module.exports = MyEventEmitter;
