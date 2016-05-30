'use strict';

const chai = require('chai');
const mocha = require('mocha');

const create_model = require('../../src/main');


mocha.describe('create_model()', () => {
  mocha.it('', () => {
    const User = create_model('users', {
      name: [{
        'type': 'ascii',
        'message': 'Ascii!'
      }]
    });
    const user = new User({name: ''});
    chai.expect(user.name()).equals('');
    chai.expect(user.name.valid()).to.be.false;
    chai.expect(user.name.message()).equals('');
    chai.expect(user.name.validate()).eql({valid: false, message: 'Ascii!'});
    chai.expect(user.name.valid()).to.be.false;
    chai.expect(user.name.message()).equals('Ascii!');

    chai.expect(user.name('a')).equals('a');
    chai.expect(user.name.valid()).to.be.false;
    chai.expect(user.name.message()).equals('Ascii!');
    chai.expect(user.name.validate()).eql({valid: true, message: ''});
    chai.expect(user.name.valid()).to.be.true;
    chai.expect(user.name.message()).equals('');
  });
});
