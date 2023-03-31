const MyEventEmitter = require("./emitter");

module.exports = {
  MyEventEmitter,
  events: {
    INICIO_VCARD: "inicio_vcard",
    FIM_VCARD: "fim_vcard",
    NOME: "nome",
    TELEFONE: "telefone",
    CLEAN_DATA: "clean_data",
  }
};
