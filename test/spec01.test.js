process.env.NODE_ENV = 'test';
const expect = require('chai').expect;
const { events } = require("../");
const meu_evento = require("../subscribers/vcf.subscriber");

describe('#Emitter', () => {
    describe('INICIO_VCARD', () => {
        it('Check event emitter creates an event emitter with success', (done) => {
            expect(meu_evento).to.not.have.property('contato');
            meu_evento.emit(events.INICIO_VCARD);
            expect(meu_evento).to.have.property('contato');
            expect(meu_evento.contato).to.be.an('object');
            expect(Object.keys(meu_evento.contato).length).equal(0);
            done();
        });
        it('Check event emitter creates an event emitter with empty object contato', (done) => {
            meu_evento.emit(events.INICIO_VCARD);
            expect(meu_evento).to.have.property('contato');
            expect(meu_evento.contato).to.be.an('object');
            expect(Object.keys(meu_evento.contato).length).equal(0);
            done();
        });
        it('Check event emitter creates an event emitter with empty object has zero length', (done) => {
            meu_evento.emit(events.INICIO_VCARD);
            expect(meu_evento.contato).to.be.an('object');
            expect(Object.keys(meu_evento.contato).length).equal(0);
            done();
        });
    });
    describe('NOME', () => {
        it('Check event emitter creates a nome property in contato object', (done) => {
            meu_evento.emit(events.INICIO_VCARD);
            meu_evento.emit(events.NOME);
            expect(meu_evento).to.have.property('contato');
            expect(meu_evento.contato).to.be.an('object');
            expect(meu_evento.contato).to.have.property('nome');
            done();
        });
        it('Check event emitter creates a nome property in contato object', (done) => {
            meu_evento.emit(events.INICIO_VCARD);
            meu_evento.emit(events.NOME, "blabla");
            expect(meu_evento).to.have.property('contato');
            expect(meu_evento.contato).to.be.an('object');
            expect(meu_evento.contato).to.have.property('nome');
            expect(meu_evento.contato.nome).equal("blabla");
            done();
        });
    });
    describe('TELEFONE', () => {
        it('Check event emitter creates a nome property in contato object', (done) => {
            meu_evento.emit(events.INICIO_VCARD);
            meu_evento.emit(events.NOME, "blabla");
            meu_evento.emit(events.TELEFONE);
            expect(meu_evento).to.have.property('contato');
            expect(meu_evento.contato).to.be.an('object');
            expect(meu_evento.contato).to.have.property('telefone');
            done();
        });
        it('Check event emitter creates a telefone property in contato object', (done) => {
            meu_evento.emit(events.INICIO_VCARD);
            meu_evento.emit(events.NOME, "blabla");
            meu_evento.emit(events.TELEFONE,"123-456");
            expect(meu_evento).to.have.property('contato');
            expect(meu_evento.contato).to.be.an('object');
            expect(meu_evento.contato).to.have.property('telefone');
            expect(meu_evento.contato.telefone).equal("123-456");
            done();
        });
    });
    describe('CLEAN_DATA', () => {
        it('Check event emitter clean telefone data', (done) => {
            meu_evento.emit(events.INICIO_VCARD);
            meu_evento.emit(events.NOME, "blabla");
            meu_evento.emit(events.TELEFONE,"123-456");
            meu_evento.emit(events.CLEAN_DATA);
            expect(meu_evento).to.have.property('contato');
            expect(meu_evento.contato).to.be.an('object');
            expect(meu_evento.contato).to.have.property('telefone');
            expect(meu_evento.contato.telefone).equal("123456");
            done();
        });
        it('Check event emitter clean telefone data with all allowed characters', (done) => {
            meu_evento.emit(events.INICIO_VCARD);
            meu_evento.emit(events.NOME, "blabla");
            meu_evento.emit(events.TELEFONE,"+55 (83) 123-456");
            meu_evento.emit(events.CLEAN_DATA);
            expect(meu_evento).to.have.property('contato');
            expect(meu_evento.contato).to.be.an('object');
            expect(meu_evento.contato).to.have.property('telefone');
            expect(meu_evento.contato.telefone).equal("5583123456");
            done();
        });
    });
    describe('FIM_VCARD', () => {
        it('Check event emitter finishes with end of vcard', (done) => {
            meu_evento.emit(events.INICIO_VCARD);
            meu_evento.emit(events.NOME, "blabla");
            meu_evento.emit(events.TELEFONE,"123-456");
            meu_evento.emit(events.CLEAN_DATA);
            meu_evento.emit(events.FIM_VCARD);
            expect(meu_evento).to.have.property('contato');
            expect(meu_evento.contato).to.be.an('object');
            expect(Object.keys(meu_evento.contato).length).equal(0);
            done();
        });
    });
});
