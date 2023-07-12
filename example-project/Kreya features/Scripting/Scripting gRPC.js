import { expect } from 'chai';

let names = [];

kreyaGrpc.onResponse(msg => {
  kreya.test('Size should be ok', () => expect(msg.size).to.be.gt(10));
  kreya.test('Greeting should start with hello', () => expect(msg.content.reply.startsWith('hello')).to.be.true);

  // Store all received names to use them when the gRPC call completes
  names.push(msg.content.reply.substr('Hello '.length));
});

kreyaGrpc.onCallCompleted(call => {
  kreya.test('Status should be ok', () => expect(call.status.code).to.equal(0));

  kreya.trace(`Got ${call.responseCount} names: ${names.join(', ')}`);
});