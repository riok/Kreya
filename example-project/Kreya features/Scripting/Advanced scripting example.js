import { expect } from 'chai';

// Code here runs before the request is sent
const messages = ['first message', 'second message', 'third message'];

// store the messages as a "user variable", which is persisted
kreya.variables.set('messages', messages);

kreyaGrpc.onResponse(msg => {
  kreya.test('Should equal the sent message', () => expect(msg.content.message).to.eql(messages[msg.index]));
});

kreyaGrpc.onCallCompleted(call => {
  kreya.test('Status should be ok', () => expect(call.status.code).to.equal(0));

  kreya.trace(`Got ${call.responseCount} responses`);
  kreya.test('Response count should match sent messages', () => expect(call.responseCount).to.eql(messages.length));
});